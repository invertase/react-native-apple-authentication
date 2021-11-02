# Interface: AppleRequestResponse

A response from `performRequest(requestOptions)`.

## Table of contents

### Properties

- [authorizationCode](AppleRequestResponse.md#authorizationcode)
- [authorizedScopes](AppleRequestResponse.md#authorizedscopes)
- [email](AppleRequestResponse.md#email)
- [fullName](AppleRequestResponse.md#fullname)
- [identityToken](AppleRequestResponse.md#identitytoken)
- [nonce](AppleRequestResponse.md#nonce)
- [realUserStatus](AppleRequestResponse.md#realuserstatus)
- [state](AppleRequestResponse.md#state)
- [user](AppleRequestResponse.md#user)

## Properties

### authorizationCode

• **authorizationCode**: ``null`` \| `string`

A short-lived, one-time valid token that can provides proof of authorization to the server
component of your app.

The authorization code is bound to the specific transaction using the state attribute passed
in the authorization request. The server component of your app can validate the code using
the Apple identity service endpoint.

#### Defined in

[index.d.ts:404](https://github.com/invertase/react-native-apple-authentication/blob/86e8b17/lib/index.d.ts#L404)

___

### authorizedScopes

• **authorizedScopes**: [`AppleRequestScope`](../enums/AppleRequestScope.md)[]

This value will contain an array of scopes for which the user provided authorization.
Note that these may contain a subset of the requested scopes. You should query this value to
identify which scopes were returned as it may be different from ones you requested.

See @{AppleRealUserStatus}

#### Defined in

[index.d.ts:369](https://github.com/invertase/react-native-apple-authentication/blob/86e8b17/lib/index.d.ts#L369)

___

### email

• **email**: ``null`` \| `string`

An optional email shared by the user.

This field is populated with a value that the user authorized.

#### Defined in

[index.d.ts:389](https://github.com/invertase/react-native-apple-authentication/blob/86e8b17/lib/index.d.ts#L389)

___

### fullName

• **fullName**: ``null`` \| [`AppleRequestResponseFullName`](AppleRequestResponseFullName.md)

An optional full name shared by the user.

This field is populated with a value that the user authorized.

See @{AppleRequestResponseFullName}

#### Defined in

[index.d.ts:353](https://github.com/invertase/react-native-apple-authentication/blob/86e8b17/lib/index.d.ts#L353)

___

### identityToken

• **identityToken**: ``null`` \| `string`

A JSON Web Token (JWT) used to communicate information about the identity of the user in a
secure way to the app.

The ID token contains the following information signed by Apple's identity service:
 - Issuer Identifier
 - Subject Identifier
 - Audience
 - Expiry Time
 - Issuance Time

#### Defined in

[index.d.ts:382](https://github.com/invertase/react-native-apple-authentication/blob/86e8b17/lib/index.d.ts#L382)

___

### nonce

• **nonce**: `string`

Nonce that was passed to the identity provider. If none was passed to the request, one will
have automatically been created and available to be read from this property, unless `nonceEnabled`
is false.
NOTE: This value will be SHA256 hashed before sending to Apple.

#### Defined in

[index.d.ts:334](https://github.com/invertase/react-native-apple-authentication/blob/86e8b17/lib/index.d.ts#L334)

___

### realUserStatus

• **realUserStatus**: [`AppleRealUserStatus`](../enums/AppleRealUserStatus.md)

Check this property for a hint as to whether the current user is a "real user".

See @{AppleRealUserStatus}

#### Defined in

[index.d.ts:360](https://github.com/invertase/react-native-apple-authentication/blob/86e8b17/lib/index.d.ts#L360)

___

### state

• **state**: ``null`` \| `string`

A copy of the state value that was passed to the initial request.

#### Defined in

[index.d.ts:394](https://github.com/invertase/react-native-apple-authentication/blob/86e8b17/lib/index.d.ts#L394)

___

### user

• **user**: `string`

An opaque user ID associated with the AppleID used for the sign in. This identifier will be
stable across the 'developer team', it can later be used as an input to

**`{appleauthrequest}`** to request user contact information.

The identifier will remain stable as long as the user is connected with the requesting client.
The value may change upon user disconnecting from the identity provider.

#### Defined in

[index.d.ts:344](https://github.com/invertase/react-native-apple-authentication/blob/86e8b17/lib/index.d.ts#L344)
