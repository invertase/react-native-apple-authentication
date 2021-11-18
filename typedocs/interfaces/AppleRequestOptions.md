# Interface: AppleRequestOptions

Apple Authentication Request options to be used with `performRequest(requestOptions)`.

## Table of contents

### Properties

- [nonce](AppleRequestOptions.md#nonce)
- [nonceEnabled](AppleRequestOptions.md#nonceenabled)
- [requestedOperation](AppleRequestOptions.md#requestedoperation)
- [requestedScopes](AppleRequestOptions.md#requestedscopes)
- [state](AppleRequestOptions.md#state)
- [user](AppleRequestOptions.md#user)

## Properties

### nonce

• `Optional` **nonce**: `string`

Nonce to be passed to the identity provider. If value not provided, one will automatically
be created for you and available as part of @{AppleRequestResponse}.

This value can be verified with the identity token provided as a part of successful
ASAuthorization response.

The nonce size may depend on the actual technology used and an error might be returned by
the request execution.

#### Defined in

[index.d.ts:268](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L268)

___

### nonceEnabled

• `Optional` **nonceEnabled**: `boolean`

Disable automatic nonce behaviour by setting this to false.

Useful for authentication providers that don't yet support nonces.

Defaults to true.

#### Defined in

[index.d.ts:277](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L277)

___

### requestedOperation

• `Optional` **requestedOperation**: [`AppleRequestOperation`](../enums/AppleRequestOperation.md)

Operation which should be executed.

**`url`** https://developer.apple.com/documentation/authenticationservices/asauthorizationoperationimplicit?language=objc

#### Defined in

[index.d.ts:248](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L248)

___

### requestedScopes

• `Optional` **requestedScopes**: [`AppleRequestScope`](../enums/AppleRequestScope.md)[]

The contact information to be requested from the user.

Only scopes for which this app was authorized for will be returned.

#### Defined in

[index.d.ts:241](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L241)

___

### state

• `Optional` **state**: `string`

State to be passed to the identity provider.

This value will be returned as a part of successful AppleRequestResponse response.

#### Defined in

[index.d.ts:284](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L284)

___

### user

• `Optional` **user**: `string`

If you have been previously vended a 'user' value through a Apple Authorization response,
you may set it here to provide additional context to the identity provider.

Inherited from `ASAuthorizationAppleIDRequest`

#### Defined in

[index.d.ts:256](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L256)
