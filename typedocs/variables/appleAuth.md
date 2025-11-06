[**@invertase/react-native-apple-authentication**](../README.md)

***

# Variable: appleAuth

> `const` **appleAuth**: `object`

Defined in: [index.d.ts:413](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L413)

## Type Declaration

### Error

> **Error**: *typeof* [`AppleError`](../enumerations/AppleError.md)

Errors that can occur during authorization.

#### Url

https://developer.apple.com/documentation/authenticationservices/asauthorizationerror/code

### isSignUpButtonSupported

> **isSignUpButtonSupported**: `boolean`

A boolean value of whether the 'SignUp' Type variant of the Apple Authentication Button is
supported.

This will always return false for Android, and false for iOS devices running iOS
versions less than 13.2

### isSupported

> **isSupported**: `boolean`

A boolean value of whether Apple Authentication is supported on this device & platform version.

This will always return false for Android, and false for iOS devices running iOS
versions less than 13.

### Operation

> **Operation**: *typeof* [`AppleRequestOperation`](../enumerations/AppleRequestOperation.md)

Operation to be executed by the request.

Request option used as part of `AppleRequestOptions` `requestedOperation`

### Scope

> **Scope**: *typeof* [`AppleRequestScope`](../enumerations/AppleRequestScope.md)

The contact information to be requested from the user.  Only scopes for which this app was
authorized for will be returned.

Scopes used as part of `AppleRequestOptions` `requestedScopes`

### State

> **State**: *typeof* [`AppleCredentialState`](../enumerations/AppleCredentialState.md)

The current Apple Authorization state.

### UserStatus

> **UserStatus**: *typeof* [`AppleRealUserStatus`](../enumerations/AppleRealUserStatus.md)

Possible values for the real user indicator.

#### Url

https://developer.apple.com/documentation/authenticationservices/asuserdetectionstatus

### getCredentialStateForUser()

> **getCredentialStateForUser**(`user`): `Promise`\<[`AppleCredentialState`](../enumerations/AppleCredentialState.md)\>

Get the current @{AppleCredentialState} for the provided user identifier.

#### Parameters

##### user

`string`

An opaque user ID associated with the AppleID used for the sign in.

#### Returns

`Promise`\<[`AppleCredentialState`](../enumerations/AppleCredentialState.md)\>

### onCredentialRevoked()

> **onCredentialRevoked**(`listener`): () => `void` \| `undefined`

Subscribe to credential revoked events. Call `getCredentialStateForUser` on event received
to confirm the current credential state for your user identifier.

#### Parameters

##### listener

`Function`

Returns a function that when called will unsubscribe from future events.

#### Returns

> (): `void` \| `undefined`

##### Returns

`void` \| `undefined`

### performRequest()

> **performRequest**(`options?`): `Promise`\<[`AppleRequestResponse`](../interfaces/AppleRequestResponse.md)\>

Perform a request to Apple Authentication services with the provided request options.

#### Parameters

##### options?

[`AppleRequestOptions`](../interfaces/AppleRequestOptions.md)

AppleRequestOptions

#### Returns

`Promise`\<[`AppleRequestResponse`](../interfaces/AppleRequestResponse.md)\>
