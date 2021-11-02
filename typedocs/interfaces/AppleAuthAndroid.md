# Interface: AppleAuthAndroid

## Table of contents

### Properties

- [Error](AppleAuthAndroid.md#error)
- [ResponseType](AppleAuthAndroid.md#responsetype)
- [Scope](AppleAuthAndroid.md#scope)
- [isSupported](AppleAuthAndroid.md#issupported)

### Methods

- [configure](AppleAuthAndroid.md#configure)
- [signIn](AppleAuthAndroid.md#signin)

## Properties

### Error

• **Error**: [`AndroidError`](../modules.md#androiderror)

#### Defined in

[index.d.ts:610](https://github.com/invertase/react-native-apple-authentication/blob/86e8b17/lib/index.d.ts#L610)

___

### ResponseType

• **ResponseType**: typeof [`AndroidResponseType`](../enums/AndroidResponseType.md)

The type of response requested. Valid values are `code` and `id_token`. You can request one or both.

#### Defined in

[index.d.ts:621](https://github.com/invertase/react-native-apple-authentication/blob/86e8b17/lib/index.d.ts#L621)

___

### Scope

• **Scope**: typeof [`AndroidScope`](../enums/AndroidScope.md)

The amount of user information requested from Apple. Valid values are `name` and `email`.
You can request one, both, or none.

#### Defined in

[index.d.ts:616](https://github.com/invertase/react-native-apple-authentication/blob/86e8b17/lib/index.d.ts#L616)

___

### isSupported

• **isSupported**: `boolean`

A boolean value of whether Apple Authentication is supported on this API version.

The Apple authentication process requires API 19+ to work correctly.

#### Defined in

[index.d.ts:596](https://github.com/invertase/react-native-apple-authentication/blob/86e8b17/lib/index.d.ts#L596)

## Methods

### configure

▸ **configure**(`configObject`): `void`

Prepare the module for sign in. This *must* be called before `appleAuthAndroid.signIn()`;

**`see`** https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_js/incorporating_sign_in_with_apple_into_other_platforms#3332113

#### Parameters

| Name | Type |
| :------ | :------ |
| `configObject` | [`AndroidConfig`](AndroidConfig.md) |

#### Returns

`void`

#### Defined in

[index.d.ts:603](https://github.com/invertase/react-native-apple-authentication/blob/86e8b17/lib/index.d.ts#L603)

___

### signIn

▸ **signIn**(): `Promise`<[`AndroidSigninResponse`](AndroidSigninResponse.md)\>

Open browser window to begin user sign in. *Must* call `appleAuthAndroid.configure(options)` first.

#### Returns

`Promise`<[`AndroidSigninResponse`](AndroidSigninResponse.md)\>

#### Defined in

[index.d.ts:608](https://github.com/invertase/react-native-apple-authentication/blob/86e8b17/lib/index.d.ts#L608)
