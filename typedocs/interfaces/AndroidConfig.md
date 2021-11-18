# Interface: AndroidConfig

## Table of contents

### Properties

- [clientId](AndroidConfig.md#clientid)
- [nonce](AndroidConfig.md#nonce)
- [nonceEnabled](AndroidConfig.md#nonceenabled)
- [redirectUri](AndroidConfig.md#redirecturi)
- [responseType](AndroidConfig.md#responsetype)
- [scope](AndroidConfig.md#scope)
- [state](AndroidConfig.md#state)

## Properties

### clientId

• **clientId**: `string`

The developer’s client identifier, as provided by WWDR.

#### Defined in

[index.d.ts:513](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L513)

___

### nonce

• `Optional` **nonce**: `string`

A String value used to associate a client session with an ID token and mitigate replay attacks.
This value will be SHA256 hashed by the library before being sent to Apple.

#### Defined in

[index.d.ts:532](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L532)

___

### nonceEnabled

• `Optional` **nonceEnabled**: `boolean`

Disable automatic nonce behaviour by setting this to false.

Useful for authentication providers that don't yet support nonces.

Defaults to true.

#### Defined in

[index.d.ts:541](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L541)

___

### redirectUri

• **redirectUri**: `string`

The URI to which the authorization redirects. It must include a domain name, and can’t be an
IP address or localhost.

#### Defined in

[index.d.ts:517](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L517)

___

### responseType

• `Optional` **responseType**: [`AndroidResponseType`](../enums/AndroidResponseType.md)

The type of response requested.

#### Defined in

[index.d.ts:520](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L520)

___

### scope

• `Optional` **scope**: [`AndroidScope`](../enums/AndroidScope.md)

The amount of user information requested from Apple.

#### Defined in

[index.d.ts:523](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L523)

___

### state

• `Optional` **state**: `string`

The current state of the request.

#### Defined in

[index.d.ts:526](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L526)
