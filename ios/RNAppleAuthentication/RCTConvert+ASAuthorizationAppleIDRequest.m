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

#import "RCTConvert+ASAuthorizationAppleIDRequest.h"
#import "RNAppleAuthUtils.h"

@implementation RCTConvert (ASAuthorizationAppleIDRequest)
+ (ASAuthorizationAppleIDRequest *)appIdRequestFromDictionary:(NSDictionary *)requestOptions {
  ASAuthorizationAppleIDProvider *appleIdProvider = [[ASAuthorizationAppleIDProvider alloc] init];
  ASAuthorizationAppleIDRequest *appleIdRequest = [appleIdProvider createRequest];

  appleIdRequest.requestedOperation = [
      self authorizationOperationForInteger:[
          [requestOptions valueForKey:@"requestedOperation"] pointerValue
      ]
  ];

  appleIdRequest.requestedScopes = [
      self authorizationScopesForNSArray:[
          requestOptions valueForKey:@"requestedScopes"
      ]
  ];

  if ([requestOptions valueForKey:@"state"] != nil) {
    appleIdRequest.state = [requestOptions valueForKey:@"state"];
  }

  if ([requestOptions valueForKey:@"user"] != nil) {
    appleIdRequest.user = [requestOptions valueForKey:@"user"];
  }

  if ([requestOptions valueForKey:@"nonce"] != nil) {
    appleIdRequest.nonce = [requestOptions valueForKey:@"nonce"];
  } else {
    appleIdRequest.nonce = [RNAppleAuthUtils stringBySha256HashingString:[RNAppleAuthUtils randomNonce:32]];
  }

  return appleIdRequest;
}

+ (ASAuthorizationOpenIDOperation)authorizationOperationForInteger:(NSInteger *)operationInteger {
  // TODO
  return ASAuthorizationOperationImplicit;
}

+ (NSArray<ASAuthorizationScope> *)authorizationScopesForNSArray:(NSArray *)scopesArray {
  // TODO
  return @[ASAuthorizationScopeEmail, ASAuthorizationScopeFullName];
}


RCT_CUSTOM_CONVERTER(ASAuthorizationAppleIDRequest *, ASAuthorizationAppleIDRequest, [self appIdRequestFromDictionary:[self NSDictionary:json]]);
@end
