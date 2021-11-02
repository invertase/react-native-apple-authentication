# Interface: AndroidSigninResponse

## Table of contents

### Properties

- [code](AndroidSigninResponse.md#code)
- [id\_token](AndroidSigninResponse.md#id_token)
- [nonce](AndroidSigninResponse.md#nonce)
- [state](AndroidSigninResponse.md#state)
- [user](AndroidSigninResponse.md#user)

## Properties

### code

• **code**: `string`

A short-lived, one-time valid token that can provides proof of authorization to the server
component of your app.

The authorization code is bound to the specific transaction using the state attribute passed
in the authorization request. The server component of your app can validate the code using
the Apple identity service endpoint.

#### Defined in

[index.d.ts:587](https://github.com/invertase/react-native-apple-authentication/blob/86e8b17/lib/index.d.ts#L587)

___

### id\_token

• `Optional` **id\_token**: `string`

A JSON Web Token (JWT) used to communicate information about the identity of the user in a
secure way to the app.

The ID token contains the following information signed by Apple's identity service:
 - Issuer Identifier
 - Subject Identifier
 - Audience
 - Expiry Time
 - Issuance Time

#### Defined in

[index.d.ts:577](https://github.com/invertase/react-native-apple-authentication/blob/86e8b17/lib/index.d.ts#L577)

___

### nonce

• `Optional` **nonce**: `string`

Nonce that was passed to the identity provider. If none was passed to the request, one will
have automatically been created and available to be read from this property, unless `nonceEnabled`
is false.
NOTE: This value will be SHA256 hashed before sending to Apple.

#### Defined in

[index.d.ts:551](https://github.com/invertase/react-native-apple-authentication/blob/86e8b17/lib/index.d.ts#L551)

___

### state

• **state**: `string`

A copy of the state value that was passed to the initial request.

#### Defined in

[index.d.ts:564](https://github.com/invertase/react-native-apple-authentication/blob/86e8b17/lib/index.d.ts#L564)

___

### user

• `Optional` **user**: `Object`

User object describing the authorized user. This value may be omitted by Apple.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `email?` | `string` |
| `name?` | `Object` |
| `name.firstName?` | `string` |
| `name.lastName?` | `string` |

#### Defined in

[index.d.ts:556](https://github.com/invertase/react-native-apple-authentication/blob/86e8b17/lib/index.d.ts#L556)
