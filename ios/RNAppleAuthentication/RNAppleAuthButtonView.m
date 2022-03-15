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

#import "RNAppleAuthButtonView.h"

@implementation RNAppleAuthButtonView

- (instancetype)initWithAuthorizationButtonType:(ASAuthorizationAppleIDButtonType)type authorizationButtonStyle:(ASAuthorizationAppleIDButtonStyle)style {
  if (self = [super initWithAuthorizationButtonType:type authorizationButtonStyle:style]) {
#if TARGET_OS_OSX
    [self setTarget:self];
    [self setAction:@selector(onAppleIDButtonPress)];
#else
    [self addTarget:self action:@selector(onAppleIDButtonPress) forControlEvents:UIControlEventTouchUpInside];
#endif
  }

  return self;
}

- (void)onAppleIDButtonPress {
  _onPress(nil);
}

@end
