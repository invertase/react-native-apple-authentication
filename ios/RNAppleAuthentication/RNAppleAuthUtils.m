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

#import <CommonCrypto/CommonDigest.h>
#import "RNAppleAuthUtils.h"

#pragma mark -
#pragma mark Constants

@implementation RNAppleAuthUtils

#pragma mark - Methods

+ (NSString *)randomNonce:(NSInteger)length {
  NSInteger remainingLength = length;
  NSMutableString *result = [NSMutableString string];
  NSString *characterSet = @"0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._";

  while (remainingLength > 0) {
    uint8_t randoms[16];
    int errorCode = SecRandomCopyBytes(kSecRandomDefault, sizeof(randoms), randoms);
    if (errorCode != errSecSuccess) {
      [NSException raise:NSInternalInconsistencyException
                  format:@"Unable to generate nonce: OSStatus %i", errorCode];
    }

    for (NSUInteger i = 0; i < sizeof(randoms); i++) {
      if (remainingLength == 0) {
        break;
      }

      if (randoms[i] < characterSet.length) {
        unichar character = [characterSet characterAtIndex:randoms[i]];
        [result appendFormat:@"%C", character];
        remainingLength--;
      }
    }
  }

  return result;
}

+ (NSString *)stringBySha256HashingString:(NSString *)input {
  NSData *data = [input dataUsingEncoding:NSUTF8StringEncoding];
  unsigned char result[CC_SHA256_DIGEST_LENGTH];
  CC_SHA256(data.bytes, (CC_LONG) data.length, result);

  NSMutableString *hashed = [NSMutableString stringWithCapacity:CC_SHA256_DIGEST_LENGTH * 2];
  for (NSInteger i = 0; i < CC_SHA256_DIGEST_LENGTH; i++) {
    [hashed appendFormat:@"%02x", result[i]];
  }
  return hashed;
}

@end
