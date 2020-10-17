
# Interface: AppleAuthAndroid

## Hierarchy

* **AppleAuthAndroid**

## Index

### Properties

* [Error](_lib_index_d_.appleauthandroid.md#error)
* [ResponseType](_lib_index_d_.appleauthandroid.md#responsetype)
* [Scope](_lib_index_d_.appleauthandroid.md#scope)

### Methods

* [configure](_lib_index_d_.appleauthandroid.md#configure)
* [signIn](_lib_index_d_.appleauthandroid.md#signin)

## Properties

###  isSupported

• **isSupported**: *boolean*

*Defined in [lib/index.d.ts:591](../../lib/index.d.ts#L591)*

A boolean value of whether Apple Authentication is supported on this API version.
The Apple authentication process requires API 19+ to work correctly.

___

###  Error

• **Error**: *[AndroidError](../modules/_lib_index_d_.md#androiderror)*

*Defined in [lib/index.d.ts:605](../../lib/index.d.ts#L605)*

___

###  ResponseType

• **ResponseType**: *typeof AndroidResponseType*

*Defined in [lib/index.d.ts:616](../../lib/index.d.ts#L616)*

The type of response requested. Valid values are `code` and `id_token`. You can request one or both.

___

###  Scope

• **Scope**: *typeof AndroidScope*

*Defined in [lib/index.d.ts:611](../../lib/index.d.ts#L611)*

The amount of user information requested from Apple. Valid values are `name` and `email`.
You can request one, both, or none.

## Methods

###  configure

▸ **configure**(`configObject`: [AndroidConfig](_lib_index_d_.androidconfig.md)): *void*

*Defined in [lib/index.d.ts:598](../../lib/index.d.ts#L598)*

Prepare the module for sign in. This *must* be called before `appleAuthAndroid.signIn()`;

**`see`** https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_js/incorporating_sign_in_with_apple_into_other_platforms#3332113

**Parameters:**

Name | Type |
------ | ------ |
`configObject` | [AndroidConfig](_lib_index_d_.androidconfig.md) |

**Returns:** *void*

___

###  signIn

▸ **signIn**(): *Promise‹[AndroidSigninResponse](_lib_index_d_.androidsigninresponse.md)›*

*Defined in [lib/index.d.ts:603](../../lib/index.d.ts#L603)*

Open browser window to begin user sign in. *Must* call `appleAuthAndroid.configure(options)` first.

**Returns:** *Promise‹[AndroidSigninResponse](_lib_index_d_.androidsigninresponse.md)›*
