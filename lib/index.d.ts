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

  export enum AppleAuthCredentialState {
    REVOKED,
    AUTHORIZED,
    NOT_FOUND,
    TRANSFERRED,
  }

  export enum AppleAuthRequestOperation {
    IMPLICIT,
    LOGIN,
    REFRESH,
    LOGOUT,
  }

  export enum AppleAuthRequestScope {
    EMAIL,
    FULL_NAME,
  }

  /**
   * Possible values for the real user indicator.
   *
   * @url https://developer.apple.com/documentation/authenticationservices/asuserdetectionstatus
   */
  export enum AppleAuthRealUserStatus {
    /**
     * Not supported on current platform, ignore the value.
     */
    UNSUPPORTED,

    /**
     * Could not determine the value.
     *
     * New users in the ecosystem will get this value as well, so you should not blacklist but
     * instead treat these users as any new user through standard email sign up flows
     */
    UNKNOWN,

    /**
     * A hint that there's high confidence that the user is real.
     */
    LIKELY_REAL,
  }

  // TODO docs
  export interface AppleButton {
    buttonStyle?: AppleButtonStyle;
    buttonType?: string;
    cornerRadius?: number;
  }

  /**
   * Apple Authentication Request options to be used with `performRequest(requestOptions)`.
   */
  export interface AppleAuthRequestOptions {
    /**
     * The contact information to be requested from the user.
     *
     * Only scopes for which this app was authorized for will be returned.
     */
    requestedScopes?: AppleAuthRequestScope[];

    /**
     * Operation which should be executed.
     *
     * @url https://developer.apple.com/documentation/authenticationservices/asauthorizationoperationimplicit?language=objc
     */
    requestedOperation?: AppleAuthRequestOperation;

    /**
     * If you have been previously vended a 'user' value through a Apple Authorization response,
     * you may set it here to provide additional context to the identity provider.
     *
     * Inherited from `ASAuthorizationAppleIDRequest`
     */
    user?: string;

    /**
     * Nonce to be passed to the identity provider.
     *
     * This value can be verified with the identity token provided as a part of successful ASAuthorization response.
     *
     * The nonce size may depend on the actual technology used and an error might be returned by the request execution.
     */
    nonce?: string;

    /**
     * State to be passed to the identity provider.
     *
     * This value will be returned as a part of successful AppleAuthRequestResponse response.
     */
    state?: string;
  }

  /**
   * A response from `performRequest(requestOptions)`.
   */
  export interface AppleAuthRequestResponse {
    // TODO
    nonce: string;
  }

  export interface Module {
    /**
     * A boolean value of whether Apple Authentication is supported on this device & platform version.
     *
     * This will always return false for Android, and false for iOS devices running iOS
     * versions less than 13.
     */
    isSupported: boolean;

    /**
     * A boolean value of whether the 'SignUp' Type variant of the Apple Authentication Button is
     * supported.
     *
     * This will always return false for Android, and false for iOS devices running iOS
     * versions less than 13.2
     */
    isSignUpButtonSupported: boolean;

    /**
     * Perform a request to Apple Authentication services with the provided request options.
     * @param options
     */
    performRequest(options: AppleAuthRequestOptions): Promise<AppleAuthRequestResponse>;

    /**
     * TODO docs
     * @param user
     */
    getCredentialStateForUser(user: string): Promise<AppleAuthCredentialState>;

    /**
     * TODO Implement
     * @param listener Returns a function that when called unsubscribes from future events.
     */
    onCredentialRevoked(listener: Function): Function;
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
  export const AppleAuthRequestScope: typeof RNAppleAuth.AppleAuthRequestScope;
  export const AppleAuthRealUserStatus: typeof RNAppleAuth.AppleAuthRealUserStatus;
  export const AppleAuthRequestOperation: typeof RNAppleAuth.AppleAuthRequestOperation;

  const defaultExport: {} & RNAppleAuth.Module;
  export default defaultExport;
}
