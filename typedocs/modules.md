# @invertase/react-native-apple-authentication

## Table of contents

### References

- [default](modules.md#default)

### Enumerations

- [AndroidResponseType](enums/AndroidResponseType.md)
- [AndroidScope](enums/AndroidScope.md)
- [AppleButtonStyle](enums/AppleButtonStyle.md)
- [AppleButtonType](enums/AppleButtonType.md)
- [AppleCredentialState](enums/AppleCredentialState.md)
- [AppleError](enums/AppleError.md)
- [AppleRealUserStatus](enums/AppleRealUserStatus.md)
- [AppleRequestOperation](enums/AppleRequestOperation.md)
- [AppleRequestScope](enums/AppleRequestScope.md)

### Interfaces

- [AndroidConfig](interfaces/AndroidConfig.md)
- [AndroidSigninResponse](interfaces/AndroidSigninResponse.md)
- [AppleAuthAndroid](interfaces/AppleAuthAndroid.md)
- [AppleButtonProps](interfaces/AppleButtonProps.md)
- [AppleRequestOptions](interfaces/AppleRequestOptions.md)
- [AppleRequestResponse](interfaces/AppleRequestResponse.md)
- [AppleRequestResponseFullName](interfaces/AppleRequestResponseFullName.md)

### Type aliases

- [AndroidError](modules.md#androiderror)

### Variables

- [AppleButton](modules.md#applebutton)
- [appleAuth](modules.md#appleauth)
- [appleAuthAndroid](modules.md#appleauthandroid)

## References

### default

Renames and re-exports [appleAuth](modules.md#appleauth)

## Type aliases

### AndroidError

Ƭ **AndroidError**: `Object`

Android

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `NOT_CONFIGURED` | `string` | Apple auth for Android wasn't configured. Be sure to call `appleAuthAndroid.configure(options)`. |
| `SIGNIN_CANCELLED` | `string` | User cancelled (closed the browser window) the sign in request. |
| `SIGNIN_FAILED` | `string` | - |

#### Defined in

[index.d.ts:486](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L486)

## Variables

### AppleButton

• **AppleButton**: { `Style`: typeof [`AppleButtonStyle`](enums/AppleButtonStyle.md) ; `Type`: typeof [`AppleButtonType`](enums/AppleButtonType.md)  } & `React.FC`<[`AppleButtonProps`](interfaces/AppleButtonProps.md)\>

#### Defined in

[index.d.ts:118](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L118)

___

### appleAuth

• **appleAuth**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `Error` | typeof [`AppleError`](enums/AppleError.md) | Errors that can occur during authorization.  **`url`** https://developer.apple.com/documentation/authenticationservices/asauthorizationerror/code |
| `Operation` | typeof [`AppleRequestOperation`](enums/AppleRequestOperation.md) | Operation to be executed by the request.  Request option used as part of `AppleRequestOptions` `requestedOperation` |
| `Scope` | typeof [`AppleRequestScope`](enums/AppleRequestScope.md) | The contact information to be requested from the user.  Only scopes for which this app was authorized for will be returned.  Scopes used as part of `AppleRequestOptions` `requestedScopes` |
| `State` | typeof [`AppleCredentialState`](enums/AppleCredentialState.md) | The current Apple Authorization state. |
| `UserStatus` | typeof [`AppleRealUserStatus`](enums/AppleRealUserStatus.md) | Possible values for the real user indicator.  **`url`** https://developer.apple.com/documentation/authenticationservices/asuserdetectionstatus |
| `isSignUpButtonSupported` | `boolean` | A boolean value of whether the 'SignUp' Type variant of the Apple Authentication Button is supported.  This will always return false for Android, and false for iOS devices running iOS versions less than 13.2 |
| `isSupported` | `boolean` | A boolean value of whether Apple Authentication is supported on this device & platform version.  This will always return false for Android, and false for iOS devices running iOS versions less than 13. |
| `getCredentialStateForUser` | (`user`: `string`) => `Promise`<[`AppleCredentialState`](enums/AppleCredentialState.md)\> | - |
| `onCredentialRevoked` | (`listener`: `Function`) => () => `undefined` \| `void` | - |
| `performRequest` | (`options?`: [`AppleRequestOptions`](interfaces/AppleRequestOptions.md)) => `Promise`<[`AppleRequestResponse`](interfaces/AppleRequestResponse.md)\> | - |

#### Defined in

[index.d.ts:408](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L408)

___

### appleAuthAndroid

• **appleAuthAndroid**: [`AppleAuthAndroid`](interfaces/AppleAuthAndroid.md)

#### Defined in

[index.d.ts:623](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L623)
