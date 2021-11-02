**[@invertase/react-native-apple-authentication](../README.md)**

# Interface: AppleAuthAndroid

## Hierarchy

* **AppleAuthAndroid**

## Index

### Properties

* [Error](_lib_index_d_.appleauthandroid.md#error)
* [ResponseType](_lib_index_d_.appleauthandroid.md#responsetype)
* [Scope](_lib_index_d_.appleauthandroid.md#scope)
* [isSupported](_lib_index_d_.appleauthandroid.md#issupported)

### Methods

* [configure](_lib_index_d_.appleauthandroid.md#configure)
* [signIn](_lib_index_d_.appleauthandroid.md#signin)

## Properties

### Error

•  **Error**: [AndroidError](../modules/_lib_index_d_.md#androiderror)

*Defined in [lib/index.d.ts:610](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L610)*

___

### ResponseType

•  **ResponseType**: *typeof* [AndroidResponseType](../enums/_lib_index_d_.androidresponsetype.md)

*Defined in [lib/index.d.ts:621](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L621)*

The type of response requested. Valid values are `code` and `id_token`. You can request one or both.

___

### Scope

•  **Scope**: *typeof* [AndroidScope](../enums/_lib_index_d_.androidscope.md)

*Defined in [lib/index.d.ts:616](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L616)*

The amount of user information requested from Apple. Valid values are `name` and `email`.
You can request one, both, or none.

___

### isSupported

•  **isSupported**: boolean

*Defined in [lib/index.d.ts:596](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L596)*

A boolean value of whether Apple Authentication is supported on this API version.

The Apple authentication process requires API 19+ to work correctly.

## Methods

### configure

▸ **configure**(`configObject`: [AndroidConfig](_lib_index_d_.androidconfig.md)): void

*Defined in [lib/index.d.ts:603](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L603)*

Prepare the module for sign in. This *must* be called before `appleAuthAndroid.signIn()`;

**`see`** https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_js/incorporating_sign_in_with_apple_into_other_platforms#3332113

#### Parameters:

Name | Type |
------ | ------ |
`configObject` | [AndroidConfig](_lib_index_d_.androidconfig.md) |

**Returns:** void

___

### signIn

▸ **signIn**(): Promise\<[AndroidSigninResponse](_lib_index_d_.androidsigninresponse.md)>

*Defined in [lib/index.d.ts:608](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L608)*

Open browser window to begin user sign in. *Must* call `appleAuthAndroid.configure(options)` first.

**Returns:** Promise\<[AndroidSigninResponse](_lib_index_d_.androidsigninresponse.md)>
