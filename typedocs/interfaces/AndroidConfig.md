[**@invertase/react-native-apple-authentication**](../README.md)

***

# Interface: AndroidConfig

Defined in: [index.d.ts:516](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L516)

## Properties

### clientId

> **clientId**: `string`

Defined in: [index.d.ts:518](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L518)

The developer’s client identifier, as provided by WWDR.

***

### nonce?

> `optional` **nonce**: `string`

Defined in: [index.d.ts:537](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L537)

A String value used to associate a client session with an ID token and mitigate replay attacks.
This value will be SHA256 hashed by the library before being sent to Apple.

***

### nonceEnabled?

> `optional` **nonceEnabled**: `boolean`

Defined in: [index.d.ts:546](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L546)

Disable automatic nonce behaviour by setting this to false.

Useful for authentication providers that don't yet support nonces.

Defaults to true.

***

### redirectUri

> **redirectUri**: `string`

Defined in: [index.d.ts:522](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L522)

The URI to which the authorization redirects. It must include a domain name, and can’t be an
IP address or localhost.

***

### responseType?

> `optional` **responseType**: [`AndroidResponseType`](../enumerations/AndroidResponseType.md)

Defined in: [index.d.ts:525](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L525)

The type of response requested.

***

### scope?

> `optional` **scope**: [`AndroidScope`](../enumerations/AndroidScope.md)

Defined in: [index.d.ts:528](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L528)

The amount of user information requested from Apple.

***

### state?

> `optional` **state**: `string`

Defined in: [index.d.ts:531](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L531)

The current state of the request.