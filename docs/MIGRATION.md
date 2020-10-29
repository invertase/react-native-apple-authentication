## Breaking Changes

### Kotlin Version

v2 of the module requires kotlinVersion of 1.3.50 or greater, and is confirmed working with 1.4.10 ("current stable" at the time this document was written on September 17, 2020)

### How you reference this module's types

All exports are now namespaced, so to migrate from v1 you need to alter your import statements and how you access the symbols.

### 1.x
```js
import appleAuth, {
  AppleButton,
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
  AppleAuthCredentialState,
} from '@invertase/react-native-apple-authentication';

const onAppleButtonPress = async () => {
  const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: AppleAuthRequestOperation.LOGIN,
    requestedScopes: [AppleAuthRequestScope.EMAIL, AppleAuthRequestScope.FULL_NAME],
  });

  const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

  if (credentialState === AppleAuthCredentialState.AUTHORIZED) {
    // user is authenticated
  }
}
```

### 2.x
```js
import { appleAuth, AppleButton } from '@invertase/react-native-apple-authentication';

const onAppleButtonPress = async () => {
  const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: appleAuth.Operation.LOGIN,
    requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
  });

  const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

  if (credentialState === appleAuth.State.AUTHORIZED) {
    // user is authenticated
  }
}
```
