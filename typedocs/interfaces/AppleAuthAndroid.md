[**@invertase/react-native-apple-authentication**](../README.md)

***

# Interface: AppleAuthAndroid

Defined in: [index.d.ts:595](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L595)

## Properties

### Error

> **Error**: [`AndroidError`](../type-aliases/AndroidError.md)

Defined in: [index.d.ts:615](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L615)

***

### isSupported

> **isSupported**: `boolean`

Defined in: [index.d.ts:601](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L601)

A boolean value of whether Apple Authentication is supported on this API version.

The Apple authentication process requires API 19+ to work correctly.

***

### ResponseType

> **ResponseType**: *typeof* [`AndroidResponseType`](../enumerations/AndroidResponseType.md)

Defined in: [index.d.ts:626](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L626)

The type of response requested. Valid values are `code` and `id_token`. You can request one or both.

***

### Scope

> **Scope**: *typeof* [`AndroidScope`](../enumerations/AndroidScope.md)

Defined in: [index.d.ts:621](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L621)

The amount of user information requested from Apple. Valid values are `name` and `email`.
You can request one, both, or none.

## Methods

### configure()

> **configure**(`configObject`): `void`

Defined in: [index.d.ts:608](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L608)

Prepare the module for sign in. This *must* be called before `appleAuthAndroid.signIn()`;

#### Parameters

##### configObject

[`AndroidConfig`](AndroidConfig.md)

#### Returns

`void`

#### See

https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_js/incorporating_sign_in_with_apple_into_other_platforms#3332113

***

### signIn()

> **signIn**(): `Promise`\<[`AndroidSigninResponse`](AndroidSigninResponse.md)\>

Defined in: [index.d.ts:613](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L613)

Open browser window to begin user sign in. *Must* call `appleAuthAndroid.configure(options)` first.

#### Returns

`Promise`\<[`AndroidSigninResponse`](AndroidSigninResponse.md)\>
