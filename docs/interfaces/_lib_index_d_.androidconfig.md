**[@invertase/react-native-apple-authentication](../README.md)**

# Interface: AndroidConfig

## Hierarchy

* **AndroidConfig**

## Index

### Properties

* [clientId](_lib_index_d_.androidconfig.md#clientid)
* [nonce](_lib_index_d_.androidconfig.md#nonce)
* [nonceEnabled](_lib_index_d_.androidconfig.md#nonceenabled)
* [redirectUri](_lib_index_d_.androidconfig.md#redirecturi)
* [responseType](_lib_index_d_.androidconfig.md#responsetype)
* [scope](_lib_index_d_.androidconfig.md#scope)
* [state](_lib_index_d_.androidconfig.md#state)

## Properties

### clientId

•  **clientId**: string

*Defined in [lib/index.d.ts:513](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L513)*

The developer’s client identifier, as provided by WWDR.

___

### nonce

• `Optional` **nonce**: undefined \| string

*Defined in [lib/index.d.ts:532](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L532)*

A String value used to associate a client session with an ID token and mitigate replay attacks.
This value will be SHA256 hashed by the library before being sent to Apple.

___

### nonceEnabled

• `Optional` **nonceEnabled**: undefined \| false \| true

*Defined in [lib/index.d.ts:541](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L541)*

Disable automatic nonce behaviour by setting this to false.

Useful for authentication providers that don't yet support nonces.

Defaults to true.

___

### redirectUri

•  **redirectUri**: string

*Defined in [lib/index.d.ts:517](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L517)*

The URI to which the authorization redirects. It must include a domain name, and can’t be an
IP address or localhost.

___

### responseType

• `Optional` **responseType**: [AndroidResponseType](../enums/_lib_index_d_.androidresponsetype.md)

*Defined in [lib/index.d.ts:520](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L520)*

The type of response requested.

___

### scope

• `Optional` **scope**: [AndroidScope](../enums/_lib_index_d_.androidscope.md)

*Defined in [lib/index.d.ts:523](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L523)*

The amount of user information requested from Apple.

___

### state

• `Optional` **state**: undefined \| string

*Defined in [lib/index.d.ts:526](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L526)*

The current state of the request.
