[**@invertase/react-native-apple-authentication**](../README.md)

***

# Interface: AppleRequestOptions

Defined in: [index.d.ts:240](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L240)

Apple Authentication Request options to be used with `performRequest(requestOptions)`.

## Properties

### nonce?

> `optional` **nonce**: `string`

Defined in: [index.d.ts:273](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L273)

Nonce to be passed to the identity provider. If value not provided, one will automatically
be created for you and available as part of @{AppleRequestResponse}.

This value can be verified with the identity token provided as a part of successful
ASAuthorization response.

The nonce size may depend on the actual technology used and an error might be returned by
the request execution.

***

### nonceEnabled?

> `optional` **nonceEnabled**: `boolean`

Defined in: [index.d.ts:282](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L282)

Disable automatic nonce behaviour by setting this to false.

Useful for authentication providers that don't yet support nonces.

Defaults to true.

***

### requestedOperation?

> `optional` **requestedOperation**: [`AppleRequestOperation`](../enumerations/AppleRequestOperation.md)

Defined in: [index.d.ts:253](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L253)

Operation which should be executed.

#### Url

https://developer.apple.com/documentation/authenticationservices/asauthorizationoperationimplicit?language=objc

***

### requestedScopes?

> `optional` **requestedScopes**: [`AppleRequestScope`](../enumerations/AppleRequestScope.md)[]

Defined in: [index.d.ts:246](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L246)

The contact information to be requested from the user.

Only scopes for which this app was authorized for will be returned.

***

### state?

> `optional` **state**: `string`

Defined in: [index.d.ts:289](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L289)

State to be passed to the identity provider.

This value will be returned as a part of successful AppleRequestResponse response.

***

### user?

> `optional` **user**: `string`

Defined in: [index.d.ts:261](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L261)

If you have been previously vended a 'user' value through a Apple Authorization response,
you may set it here to provide additional context to the identity provider.

Inherited from `ASAuthorizationAppleIDRequest`
