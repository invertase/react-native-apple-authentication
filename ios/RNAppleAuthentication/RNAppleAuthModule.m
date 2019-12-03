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

#import <React/RCTUtils.h>

#import "RNAppleAuthModule.h"
#import "RNAppleAuthASAuthorizationDelegates.h"

@implementation RNAppleAuthModule

#pragma mark -
#pragma mark Module Setup

RCT_EXPORT_MODULE();

- (dispatch_queue_t)methodQueue {
  return dispatch_get_main_queue();
}

+ (BOOL)requiresMainQueueSetup {
  return NO;
}

#pragma mark -
#pragma mark React Native Module Methods

RCT_EXPORT_METHOD(getCredentialStateForUser:
  (NSString *) user
    :(RCTPromiseResolveBlock) resolve
    :(RCTPromiseRejectBlock) reject
) {
  ASAuthorizationAppleIDProvider *appleIdProvider = [[ASAuthorizationAppleIDProvider alloc] init];
  id completionBlock = ^(ASAuthorizationAppleIDProviderCredentialState credentialState, NSError *_Nullable error) {
    if (error) {
      return reject([@(error.code) stringValue], error.localizedDescription, error);
    } else {
      resolve(@(credentialState));
    }
  };
  [appleIdProvider getCredentialStateForUserID:user completion:completionBlock];
}

RCT_EXPORT_METHOD(performRequest:
  (ASAuthorizationAppleIDRequest *) appleIdRequest
    :(RCTPromiseResolveBlock) resolve
    :(RCTPromiseRejectBlock) reject
) {
  ASAuthorizationController *authorizationController = [
      [ASAuthorizationController alloc] initWithAuthorizationRequests:@[appleIdRequest]
  ];

  RNAppleAuthASAuthorizationDelegates *delegates = [
      [RNAppleAuthASAuthorizationDelegates alloc] initWithPromiseResolve:resolve andPromiseReject:reject
  ];

  [delegates performRequestsForAuthorizationController:authorizationController andProvidingNonce:appleIdRequest.nonce];
}

- (NSDictionary *)constantsToExport {
  return @{
      @"isSupported": @available(iOS 13.0, *) ? @(YES) : @(NO),
      @"isSignUpButtonSupported": @available(iOS 13.2, *) ? @(YES) : @(NO),
  };
}

@end
