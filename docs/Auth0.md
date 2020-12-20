# Usage with Auth0
Auth0 has [documentation](https://auth0.com/docs/connections/nativesocial/apple) regarding this specific feature, but here is a quick snippet for you to utilize in your applications. Keep in mind the specific parameters used are [documented in Auth0's API explorer](https://auth0.com/docs/api/authentication#token-exchange-for-native-social).

## Prerequisites to using this library

The `@invertase/react-native-apple-authentication` library will not work if you do not ensure the following:

- You are using React Native version `0.60` or higher.

- (iOS only) You have setup react-native iOS development environment on your machine (Will only work on Mac). If not, please follow the official React Native documentation for getting started: [React Native getting started documentation](https://facebook.github.io/react-native/docs/getting-started).

- (iOS only) You are using Xcode version `11` or higher. This will allow you to develop using iOS version `13` or higher, when the Sign In with Apple APIs first became available.

- **Once you're sure you've met the above, please follow our [Initial development environment setup](INITIAL_SETUP.md) guide.**

# iOS example

```js
import { appleAuth } from '@invertase/react-native-apple-authentication';
import axios from 'axios';
import {
    auth0Client,
    auth0Domain,
    auth0Audience
} from '../constants/constants';

export default async function AppleAuthentication() {
    return new Promise(async (resolve, reject) => {
        const appleAuthRequestResponse = await appleAuth.performRequest({
            nonceEnabled: false,
            requestedOperation: appleAuth.Operation.LOGIN,
            requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME]
        });

        const credentialState = await appleAuth.getCredentialStateForUser(
            appleAuthRequestResponse.user
        );

        if (credentialState === appleAuth.State.AUTHORIZED) {
            const {
                    fullName,
                    authorizationCode,
                    email
                } = appleAuthRequestResponse,
                { familyName, givenName } = fullName;

            await axios({
                url: `https://${auth0Domain}/oauth/token`,
                method: 'POST',
                data: {
                    grant_type:
                        'urn:ietf:params:oauth:grant-type:token-exchange',
                    subject_token_type:
                        'http://auth0.com/oauth/token-type/apple-authz-code',
                    scope:
                        'read:appointments openid profile email email_verified',
                    audience: auth0Audience,
                    subject_token: authorizationCode,
                    client_id: auth0Client,
                    user_profile: JSON.stringify({
                        name: {
                            firstName: givenName,
                            lastName: familyName
                        },
                        email: email
                    })
                }
            })
                .then(async (_auth0Response) => {
                    //console.log(_auth0Response);

                    resolve({
                        message: 'success',
                        ..._auth0Response,
                        first_name: givenName,
                        last_name: familyName
                    });
                })
                .catch((_auth0Error) => {
                    //console.log('AUTH0 ERROR', _auth0Error);
                    reject({ error: true, message: 'error', detailedInformation: _auth0Error });
                });
        }
    });
}

```
