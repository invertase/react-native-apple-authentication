/**
 * Copyright (c) 2016-present Invertase Limited & Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this library except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

#import "RNAppleAuthASAuthorizationDelegates.h"

// Needed for visionOS support, but not available for macOS
#if TARGET_OS_IPHONE
#import <UIKit/UIKit.h>
#endif

#import <AuthenticationServices/AuthenticationServices.h>


@implementation RNAppleAuthASAuthorizationDelegates

- (instancetype)initWithCompletion:(nonnull void (^)(NSError *error, NSDictionary *authorizationCredential))completion andNonce:(NSString *)nonce {
  if (self = [super init]) {
    _completion = completion;
    _nonce = nonce;
  }
  return self;
}

#pragma mark - ASAuthorizationControllerPresentationContextProviding Methods

- (ASPresentationAnchor)presentationAnchorForAuthorizationController:(ASAuthorizationController *)controller {
#if TARGET_OS_OSX
    return [[NSApplication sharedApplication] keyWindow];
#else
    #if TARGET_OS_VISION
        // visionOS
        UIWindow *window = nil;
        NSSet<UIScene *> *connectedScenes = [UIApplication sharedApplication].connectedScenes;
        for (UIScene *scene in connectedScenes) {
            if (scene.activationState == UISceneActivationStateForegroundActive && [scene isKindOfClass:[UIWindowScene class]]) {
                UIWindowScene *windowScene = (UIWindowScene *)scene;
                window = windowScene.windows.firstObject;
                break;
            }
        }
        return window;
    #else
        // I believe the vision OS one above is actually the best way to handle the deprecation:
        // Apple Auth not supported until iOS13 anyway, so the solution above should be using avaliable APIs (13+)
        // iPadOS optimal solution also relies on using activation state vs just using last connected Scene
        return [[UIApplication sharedApplication] keyWindow];
    #endif
#endif
}

#pragma mark - ASAuthorizationControllerDelegate Methods

- (void)authorizationController:(ASAuthorizationController *)controller didCompleteWithAuthorization:(ASAuthorization *)authorization {
  NSLog(@"RNAppleAuth -> didCompleteWithAuthorization");
  ASAuthorizationAppleIDCredential *appleIdCredential = authorization.credential;
  _completion(nil, [self buildDictionaryFromAppleIdCredential:appleIdCredential]);
  _completion = nil;
}

- (void)authorizationController:(ASAuthorizationController *)controller didCompleteWithError:(NSError *)error {
  NSLog(@"RNAppleAuth -> didCompleteWithError");
  NSLog(@"%@", error.localizedDescription);
  _completion(error, nil);
  _completion = nil;
}

#pragma mark - ASAuthorizationController Methods

- (void)performRequestsForAuthorizationController:(ASAuthorizationController *)authorizationController {
  authorizationController.delegate = self;
  authorizationController.presentationContextProvider = self;
  [authorizationController performRequests];
}

#pragma mark - ASAuthorizationController Methods

- (NSDictionary *)buildDictionaryFromAppleIdCredential:(ASAuthorizationAppleIDCredential *)appleIdCredential {
  NSString *identityToken;
  if ([appleIdCredential valueForKey:@"identityToken"] != nil) {
    identityToken = [
        [NSString alloc] initWithData:[appleIdCredential valueForKey:@"identityToken"] encoding:NSUTF8StringEncoding
    ];
  }

  NSString *authorizationCode;
  if ([appleIdCredential valueForKey:@"authorizationCode"] != nil) {
    authorizationCode = [
        [NSString alloc] initWithData:[appleIdCredential valueForKey:@"authorizationCode"] encoding:NSUTF8StringEncoding
    ];
  }

  NSMutableDictionary *fullName;
  if ([appleIdCredential valueForKey:@"fullName"] != nil) {
    fullName = [[appleIdCredential.fullName dictionaryWithValuesForKeys:@[
        @"namePrefix",
        @"givenName",
        @"middleName",
        @"familyName",
        @"nameSuffix",
        @"nickname",
    ]] mutableCopy];
    [fullName enumerateKeysAndObjectsUsingBlock:^(id key, id obj, BOOL *stop) {
      if (obj == nil) {
        fullName[key] = [NSNull null];
      }
    }];
  }

  return @{
      @"nonce": _nonce ? _nonce : (id) [NSNull null],
      @"user": appleIdCredential.user,
      @"fullName": fullName ? fullName : (id) [NSNull null],
      @"realUserStatus": @(appleIdCredential.realUserStatus),
      @"authorizedScopes": appleIdCredential.authorizedScopes,
      @"identityToken": identityToken ? identityToken : (id) [NSNull null],
      @"email": appleIdCredential.email ? appleIdCredential.email : (id) [NSNull null],
      @"state": appleIdCredential.state ? appleIdCredential.state : (id) [NSNull null],
      @"authorizationCode": authorizationCode ? authorizationCode : (id) [NSNull null],
  };
}

@end
