**[@invertase/react-native-apple-authentication](../README.md)**

# Interface: AppleRequestOptions

Apple Authentication Request options to be used with `performRequest(requestOptions)`.

## Hierarchy

* **AppleRequestOptions**

## Index

### Properties

* [nonce](_lib_index_d_.applerequestoptions.md#nonce)
* [nonceEnabled](_lib_index_d_.applerequestoptions.md#nonceenabled)
* [requestedOperation](_lib_index_d_.applerequestoptions.md#requestedoperation)
* [requestedScopes](_lib_index_d_.applerequestoptions.md#requestedscopes)
* [state](_lib_index_d_.applerequestoptions.md#state)
* [user](_lib_index_d_.applerequestoptions.md#user)

## Properties

### nonce

• `Optional` **nonce**: undefined \| string

*Defined in [lib/index.d.ts:268](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L268)*

Nonce to be passed to the identity provider. If value not provided, one will automatically
be created for you and available as part of @{AppleRequestResponse}.

This value can be verified with the identity token provided as a part of successful
ASAuthorization response.

The nonce size may depend on the actual technology used and an error might be returned by
the request execution.

___

### nonceEnabled

• `Optional` **nonceEnabled**: undefined \| false \| true

*Defined in [lib/index.d.ts:277](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L277)*

Disable automatic nonce behaviour by setting this to false.

Useful for authentication providers that don't yet support nonces.

Defaults to true.

___

### requestedOperation

• `Optional` **requestedOperation**: [AppleRequestOperation](../enums/_lib_index_d_.applerequestoperation.md)

*Defined in [lib/index.d.ts:248](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L248)*

Operation which should be executed.

**`url`** https://developer.apple.com/documentation/authenticationservices/asauthorizationoperationimplicit?language=objc

___

### requestedScopes

• `Optional` **requestedScopes**: [AppleRequestScope](../enums/_lib_index_d_.applerequestscope.md)[]

*Defined in [lib/index.d.ts:241](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L241)*

The contact information to be requested from the user.

Only scopes for which this app was authorized for will be returned.

___

### state

• `Optional` **state**: undefined \| string

*Defined in [lib/index.d.ts:284](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L284)*

State to be passed to the identity provider.

This value will be returned as a part of successful AppleRequestResponse response.

___

### user

• `Optional` **user**: undefined \| string

*Defined in [lib/index.d.ts:256](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L256)*

If you have been previously vended a 'user' value through a Apple Authorization response,
you may set it here to provide additional context to the identity provider.

Inherited from `ASAuthorizationAppleIDRequest`
