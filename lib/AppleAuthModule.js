/*
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

import { NativeEventEmitter } from 'react-native';

function throwIfNotSupported(supported = false) {
  if (!supported) {
    throw new Error(
      'AppleAuth is not supported on the device. Currently Apple Authentication works on iOS ' +
        "devices running iOS 13 or later. Use 'AppleAuth.isSupported' to check device is supported " +
        'before calling any of the module methods.',
    );
  }
}

export default class AppleAuthModule {
  constructor(nativeModule) {
    this.native = nativeModule;
    if (this.native) {
      this.emitter = new NativeEventEmitter(this.native);
    }
  }

  get isSupported() {
    return this.native ? this.native.isSupported : false;
  }

  get isSignUpButtonSupported() {
    return this.native ? this.native.isSignUpButtonSupported : false;
  }

  getCredentialStateForUser(user) {
    throwIfNotSupported(this.isSupported);

    if (!user || typeof user !== 'string') {
      throw new Error(
        `AppleAuth.getCredentialStateForUser(*) 'users' is required and must be a string value.`,
      );
    }

    return this.native.getCredentialStateForUser(user);
  }

  performRequest(
    requestOptions = {
      requestedOperation: 0, // 'Implicit' default
      requestedScopes: [],
    },
  ) {
    throwIfNotSupported(this.isSupported);

    if (!Object.hasOwnProperty.call(requestOptions, ['requestedOperation'])) {
      requestOptions.requestedOperation = 0; // 'Implicit' default
    } else if (!Number.isInteger(requestOptions.requestedOperation)) {
      throw new Error(
        "RNAppleAuth.AppleAuthRequestOptions 'requestedOperation' must be a value of AppleAuthRequestOperation.",
      );
    }

    if (!Object.hasOwnProperty.call(requestOptions, ['requestedScopes'])) {
      requestOptions.requestedScopes = [];
    } else if (!Array.isArray(requestOptions.requestedScopes)) {
      throw new Error(
        "RNAppleAuth.AppleAuthRequestOptions 'requestedScopes' must be an array value if provided.",
      );
    }

    return this.native.performRequest(requestOptions);
  }

  onCredentialRevoked(listener) {
    throwIfNotSupported(this.isSupported);
    if (typeof listener !== 'function') {
      throw new Error(
        "RNAppleAuth.onCredentialRevoked(*) 'listener' is required and must be a function.",
      );
    }
    const subscription = this.emitter.addListener('RNAppleAuth.onCredentialRevoked', listener);
    return () => subscription.remove();
  }
}
