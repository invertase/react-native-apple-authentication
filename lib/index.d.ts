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

namespace RNAppleAuth {
  export enum AppleButtonStyle {
    DEFAULT = 'White',
    WHITE = 'White',
    WHITE_OUTLINE = 'WhiteOutline',
    BLACK = 'Black',
  }

  export enum AppleButtonType {
    DEFAULT = 'SignIn',
    SIGN_IN = 'SignIn',
    CONTINUE = 'Continue',
  }

  // TODO enum values come from native constants
  export enum AppleAuthCredentialState {
    REVOKED,
    AUTHORIZED,
    NOT_FOUND,
    TRANSFERRED,
  }

  // TODO enum values come from native constants
  export enum AppleAuthRequestOperation {
    IMPLICIT,
    LOGIN,
    REFRESH,
    LOGOUT,
  }

  export interface AppleButton {
    buttonStyle?: AppleButtonStyle;
    buttonType?: string;
    cornerRadius?: number;
  }

  export interface AppleAuthRequestOptions {
    // TODO enum
    scopes?: string[];
    // TODO enum
    // https://developer.apple.com/documentation/authenticationservices/asauthorizationoperationimplicit?language=objc
    operation: string;
    // TODO
    user?: string;
  }

  export interface AppleAuthRequestResponse {
    // TODO
  }

  export interface Module {
    /**
     * A boolean value of whether Apple Authentication is supported on this device & platform version.
     *
     * This will always return false for Android, and false for iOS devices running iOS
     * versions less than 13.
     */
    isSupported: boolean;

    login(options: AppleAuthRequestOptions): Promise<AppleAuthRequestResponse>;
    logout(options: AppleAuthRequestOptions): Promise<AppleAuthRequestResponse>;
    refresh(options: AppleAuthRequestOptions): Promise<AppleAuthRequestResponse>;
    // |-> all 3 internally call:
    // performRequest(options: AppleAuthRequestOptions): Promise<AppleAuthRequestResponse>;

    /**
     * TODO docs
     * @param listener Returns unsubscriber function
     */
    onCredentialRevoked(listener: Function): Function;

    /**
     * TODO docs
     * @param user
     */
    getCredentialStateForUser(user: string): Promise<AppleAuthCredentialState>;
  }

  /**
   * Errors that can occur during authorization.
   *
   * @url https://developer.apple.com/documentation/authenticationservices/asauthorizationerror/code
   */
  export enum AppleAuthError {
    /**
     * The authorization attempt failed for an unknown reason.
     */
    UNKNOWN = '1000',

    /**
     * The user canceled the authorization attempt.
     */
    CANCELED = '1001',

    /**
     * The authorization request received an invalid response.
     */
    INVALID_RESPONSE = '1002',

    /**
     * The authorization request wasn't handled.
     */
    NOT_HANDLED = '1003',

    /**
     * The authorization attempt failed.
     */
    FAILED = '1004',
  }
}

declare module '@invertase/react-native-apple-authentication' {
  import React from 'react';

  export const AppleButton: {
    Type: typeof RNAppleAuth.AppleButtonType;
    Style: typeof RNAppleAuth.AppleButtonStyle;
  } & React.FC<RNAppleAuth.AppleButton>;

  export const AppleAuthError: typeof RNAppleAuth.AppleAuthError;

  const defaultExport: {} & RNAppleAuth.Module;
  export default defaultExport;
}
