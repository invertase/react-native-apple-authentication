**[@invertase/react-native-apple-authentication](../README.md)**

# Module: "lib/index.d"

## Index

### Enumerations

* [AndroidResponseType](../enums/_lib_index_d_.androidresponsetype.md)
* [AndroidScope](../enums/_lib_index_d_.androidscope.md)
* [AppleButtonStyle](../enums/_lib_index_d_.applebuttonstyle.md)
* [AppleButtonType](../enums/_lib_index_d_.applebuttontype.md)
* [AppleCredentialState](../enums/_lib_index_d_.applecredentialstate.md)
* [AppleError](../enums/_lib_index_d_.appleerror.md)
* [AppleRealUserStatus](../enums/_lib_index_d_.applerealuserstatus.md)
* [AppleRequestOperation](../enums/_lib_index_d_.applerequestoperation.md)
* [AppleRequestScope](../enums/_lib_index_d_.applerequestscope.md)

### Interfaces

* [AndroidConfig](../interfaces/_lib_index_d_.androidconfig.md)
* [AndroidSigninResponse](../interfaces/_lib_index_d_.androidsigninresponse.md)
* [AppleAuthAndroid](../interfaces/_lib_index_d_.appleauthandroid.md)
* [AppleButtonProps](../interfaces/_lib_index_d_.applebuttonprops.md)
* [AppleRequestOptions](../interfaces/_lib_index_d_.applerequestoptions.md)
* [AppleRequestResponse](../interfaces/_lib_index_d_.applerequestresponse.md)
* [AppleRequestResponseFullName](../interfaces/_lib_index_d_.applerequestresponsefullname.md)

### Type aliases

* [AndroidError](_lib_index_d_.md#androiderror)

### Variables

* [AppleButton](_lib_index_d_.md#applebutton)
* [appleAuth](_lib_index_d_.md#appleauth)
* [appleAuthAndroid](_lib_index_d_.md#appleauthandroid)

## Type aliases

### AndroidError

Ƭ  **AndroidError**: { NOT_CONFIGURED: string ; SIGNIN_CANCELLED: string ; SIGNIN_FAILED: string  }

*Defined in [lib/index.d.ts:486](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L486)*

Android

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`NOT_CONFIGURED` | string | Apple auth for Android wasn't configured. Be sure to call `appleAuthAndroid.configure(options)`. |
`SIGNIN_CANCELLED` | string | User cancelled (closed the browser window) the sign in request. |
`SIGNIN_FAILED` | string | - |

## Variables

### AppleButton

• `Const` **AppleButton**: { Style: *typeof* [AppleButtonStyle](../enums/_lib_index_d_.applebuttonstyle.md) ; Type: *typeof* [AppleButtonType](../enums/_lib_index_d_.applebuttontype.md)  } & React.FC\<[AppleButtonProps](../interfaces/_lib_index_d_.applebuttonprops.md)>

*Defined in [lib/index.d.ts:118](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L118)*

___

### appleAuth

• `Const` **appleAuth**: object

*Defined in [lib/index.d.ts:408](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L408)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`Error` | *typeof* [AppleError](../enums/_lib_index_d_.appleerror.md) | Errors that can occur during authorization.  **`url`** https://developer.apple.com/documentation/authenticationservices/asauthorizationerror/code  |
`Operation` | *typeof* [AppleRequestOperation](../enums/_lib_index_d_.applerequestoperation.md) | Operation to be executed by the request.  Request option used as part of `AppleRequestOptions` `requestedOperation`  |
`Scope` | *typeof* [AppleRequestScope](../enums/_lib_index_d_.applerequestscope.md) | The contact information to be requested from the user.  Only scopes for which this app was authorized for will be returned.  Scopes used as part of `AppleRequestOptions` `requestedScopes`  |
`State` | *typeof* [AppleCredentialState](../enums/_lib_index_d_.applecredentialstate.md) | The current Apple Authorization state. |
`UserStatus` | *typeof* [AppleRealUserStatus](../enums/_lib_index_d_.applerealuserstatus.md) | Possible values for the real user indicator.  **`url`** https://developer.apple.com/documentation/authenticationservices/asuserdetectionstatus  |
`isSignUpButtonSupported` | boolean | A boolean value of whether the 'SignUp' Type variant of the Apple Authentication Button is supported.  This will always return false for Android, and false for iOS devices running iOS versions less than 13.2  |
`isSupported` | boolean | A boolean value of whether Apple Authentication is supported on this device & platform version.  This will always return false for Android, and false for iOS devices running iOS versions less than 13.  |
`getCredentialStateForUser` | (user: string) => Promise\<[AppleCredentialState](../enums/_lib_index_d_.applecredentialstate.md)> | - |
`onCredentialRevoked` | (listener: Function) => () => void \| undefined | - |
`performRequest` | (options?: [AppleRequestOptions](../interfaces/_lib_index_d_.applerequestoptions.md)) => Promise\<[AppleRequestResponse](../interfaces/_lib_index_d_.applerequestresponse.md)> | - |

___

### appleAuthAndroid

• `Const` **appleAuthAndroid**: [AppleAuthAndroid](../interfaces/_lib_index_d_.appleauthandroid.md)

*Defined in [lib/index.d.ts:623](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L623)*
