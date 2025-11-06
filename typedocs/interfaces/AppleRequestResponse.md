[**@invertase/react-native-apple-authentication**](../README.md)

***

# Interface: AppleRequestResponse

Defined in: [index.d.ts:332](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L332)

A response from `performRequest(requestOptions)`.

## Properties

### authorizationCode

> **authorizationCode**: `string` \| `null`

Defined in: [index.d.ts:409](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L409)

A short-lived, one-time valid token that can provides proof of authorization to the server
component of your app.

The authorization code is bound to the specific transaction using the state attribute passed
in the authorization request. The server component of your app can validate the code using
the Apple identity service endpoint.

***

### authorizedScopes

> **authorizedScopes**: [`AppleRequestScope`](../enumerations/AppleRequestScope.md)[]

Defined in: [index.d.ts:374](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L374)

This value will contain an array of scopes for which the user provided authorization.
Note that these may contain a subset of the requested scopes. You should query this value to
identify which scopes were returned as it may be different from ones you requested.

See @{AppleRealUserStatus}

***

### email

> **email**: `string` \| `null`

Defined in: [index.d.ts:394](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L394)

An optional email shared by the user.

This field is populated with a value that the user authorized.

***

### fullName

> **fullName**: [`AppleRequestResponseFullName`](AppleRequestResponseFullName.md) \| `null`

Defined in: [index.d.ts:358](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L358)

An optional full name shared by the user.

This field is populated with a value that the user authorized.

See @{AppleRequestResponseFullName}

***

### identityToken

> **identityToken**: `string` \| `null`

Defined in: [index.d.ts:387](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L387)

A JSON Web Token (JWT) used to communicate information about the identity of the user in a
secure way to the app.

The ID token contains the following information signed by Apple's identity service:
 - Issuer Identifier
 - Subject Identifier
 - Audience
 - Expiry Time
 - Issuance Time

***

### nonce

> **nonce**: `string`

Defined in: [index.d.ts:339](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L339)

Nonce that was passed to the identity provider. If none was passed to the request, one will
have automatically been created and available to be read from this property, unless `nonceEnabled`
is false.
NOTE: This value will be SHA256 hashed before sending to Apple.

***

### realUserStatus

> **realUserStatus**: [`AppleRealUserStatus`](../enumerations/AppleRealUserStatus.md)

Defined in: [index.d.ts:365](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L365)

Check this property for a hint as to whether the current user is a "real user".

See @{AppleRealUserStatus}

***

### state

> **state**: `string` \| `null`

Defined in: [index.d.ts:399](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L399)

A copy of the state value that was passed to the initial request.

***

### user

> **user**: `string`

Defined in: [index.d.ts:349](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L349)

An opaque user ID associated with the AppleID used for the sign in. This identifier will be
stable across the 'developer team', it can later be used as an input to
@{AppleAuthRequest} to request user contact information.

The identifier will remain stable as long as the user is connected with the requesting client.
The value may change upon user disconnecting from the identity provider.
