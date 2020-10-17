
# Interface: AndroidConfig

## Hierarchy

* **AndroidConfig**

## Index

### Properties

* [clientId](_lib_index_d_.androidconfig.md#clientid)
* [nonce](_lib_index_d_.androidconfig.md#optional-nonce)
* [nonceEnabled](_lib_index_d_.androidconfig.md#optional-nonceenabled)
* [redirectUri](_lib_index_d_.androidconfig.md#redirecturi)
* [responseType](_lib_index_d_.androidconfig.md#optional-responsetype)
* [scope](_lib_index_d_.androidconfig.md#optional-scope)
* [state](_lib_index_d_.androidconfig.md#optional-state)

## Properties

###  clientId

• **clientId**: *string*

*Defined in [lib/index.d.ts:508](../../lib/index.d.ts#L508)*

The developer’s client identifier, as provided by WWDR.

___

### `Optional` nonce

• **nonce**? : *undefined | string*

*Defined in [lib/index.d.ts:527](../../lib/index.d.ts#L527)*

A String value used to associate a client session with an ID token and mitigate replay attacks.
This value will be SHA256 hashed by the library before being sent to Apple.

___

### `Optional` nonceEnabled

• **nonceEnabled**? : *undefined | boolean*

*Defined in [lib/index.d.ts:536](../../lib/index.d.ts#L536)*

Disable automatic nonce behaviour by setting this to false. Useful for authentication providers that don't yet support nonces. Defaults to true.

___

###  redirectUri

• **redirectUri**: *string*

*Defined in [lib/index.d.ts:512](../../lib/index.d.ts#L512)*

The URI to which the authorization redirects. It must include a domain name, and can’t be an
IP address or localhost.

___

### `Optional` responseType

• **responseType**? : *[AndroidResponseType](../enums/_lib_index_d_.androidresponsetype.md)*

*Defined in [lib/index.d.ts:515](../../lib/index.d.ts#L515)*

The type of response requested.

___

### `Optional` scope

• **scope**? : *[AndroidScope](../enums/_lib_index_d_.androidscope.md)*

*Defined in [lib/index.d.ts:518](../../lib/index.d.ts#L518)*

The amount of user information requested from Apple.

___

### `Optional` state

• **state**? : *undefined | string*

*Defined in [lib/index.d.ts:521](../../lib/index.d.ts#L521)*

The current state of the request.
