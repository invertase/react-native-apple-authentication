**[@invertase/react-native-apple-authentication](../README.md)**

# Interface: AndroidSigninResponse

## Hierarchy

* **AndroidSigninResponse**

## Index

### Properties

* [code](_lib_index_d_.androidsigninresponse.md#code)
* [id\_token](_lib_index_d_.androidsigninresponse.md#id_token)
* [nonce](_lib_index_d_.androidsigninresponse.md#nonce)
* [state](_lib_index_d_.androidsigninresponse.md#state)
* [user](_lib_index_d_.androidsigninresponse.md#user)

## Properties

### code

•  **code**: string

*Defined in [lib/index.d.ts:587](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L587)*

A short-lived, one-time valid token that can provides proof of authorization to the server
component of your app.

The authorization code is bound to the specific transaction using the state attribute passed
in the authorization request. The server component of your app can validate the code using
the Apple identity service endpoint.

___

### id\_token

• `Optional` **id\_token**: undefined \| string

*Defined in [lib/index.d.ts:577](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L577)*

A JSON Web Token (JWT) used to communicate information about the identity of the user in a
secure way to the app.

The ID token contains the following information signed by Apple's identity service:
 - Issuer Identifier
 - Subject Identifier
 - Audience
 - Expiry Time
 - Issuance Time

___

### nonce

• `Optional` **nonce**: undefined \| string

*Defined in [lib/index.d.ts:551](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L551)*

Nonce that was passed to the identity provider. If none was passed to the request, one will
have automatically been created and available to be read from this property, unless `nonceEnabled`
is false.
NOTE: This value will be SHA256 hashed before sending to Apple.

___

### state

•  **state**: string

*Defined in [lib/index.d.ts:564](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L564)*

A copy of the state value that was passed to the initial request.

___

### user

• `Optional` **user**: undefined \| { email?: undefined \| string ; name?: undefined \| { firstName?: undefined \| string ; lastName?: undefined \| string  }  }

*Defined in [lib/index.d.ts:556](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L556)*

User object describing the authorized user. This value may be omitted by Apple.
