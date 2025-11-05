[**@invertase/react-native-apple-authentication**](../README.md)

***

# Interface: AndroidSigninResponse

Defined in: [index.d.ts:549](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L549)

## Properties

### code

> **code**: `string`

Defined in: [index.d.ts:592](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L592)

A short-lived, one-time valid token that can provides proof of authorization to the server
component of your app.

The authorization code is bound to the specific transaction using the state attribute passed
in the authorization request. The server component of your app can validate the code using
the Apple identity service endpoint.

***

### id\_token?

> `optional` **id\_token**: `string`

Defined in: [index.d.ts:582](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L582)

A JSON Web Token (JWT) used to communicate information about the identity of the user in a
secure way to the app.

The ID token contains the following information signed by Apple's identity service:
 - Issuer Identifier
 - Subject Identifier
 - Audience
 - Expiry Time
 - Issuance Time

***

### nonce?

> `optional` **nonce**: `string`

Defined in: [index.d.ts:556](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L556)

Nonce that was passed to the identity provider. If none was passed to the request, one will
have automatically been created and available to be read from this property, unless `nonceEnabled`
is false.
NOTE: This value will be SHA256 hashed before sending to Apple.

***

### state

> **state**: `string`

Defined in: [index.d.ts:569](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L569)

A copy of the state value that was passed to the initial request.

***

### user?

> `optional` **user**: `object`

Defined in: [index.d.ts:561](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L561)

User object describing the authorized user. This value may be omitted by Apple.

#### email?

> `optional` **email**: `string`

#### name?

> `optional` **name**: `object`

##### name.firstName?

> `optional` **firstName**: `string`

##### name.lastName?

> `optional` **lastName**: `string`
