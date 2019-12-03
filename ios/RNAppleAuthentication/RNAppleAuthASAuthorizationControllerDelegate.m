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

#import "RNAppleAuthASAuthorizationControllerDelegate.h"

@implementation RNAppleAuthASAuthorizationControllerDelegate

+ (instancetype)sharedInstance {
  static dispatch_once_t once;
  static RNAppleAuthASAuthorizationControllerDelegate *sharedInstance;
  dispatch_once(&once, ^{
    sharedInstance = [[RNAppleAuthASAuthorizationControllerDelegate alloc] init];
  });
  return sharedInstance;
}

// used to temporarily store a promise instance to authorization requests sent to ASAuthorizationController
- (void)setPromiseResolve:(RCTPromiseResolveBlock)resolve andPromiseReject:(RCTPromiseRejectBlock)reject {
  _registerPromiseResolver = resolve;
  _registerPromiseRejecter = reject;
}

#pragma mark -
#pragma mark ASAuthorizationControllerDelegate Methods

- (void)authorizationController:(ASAuthorizationController *)controller
   didCompleteWithAuthorization:(ASAuthorization *)authorization API_AVAILABLE(ios(13.0)) {
  // TODO
}

- (void)authorizationController:(ASAuthorizationController *)controller
           didCompleteWithError:(NSError *)error API_AVAILABLE(ios(13.0)) {
  // TODO
}

@end
