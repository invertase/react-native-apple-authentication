/* eslint-disable no-console */
/*
 * Copyright (c) 2016-present Invertase Limited & Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this library except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import React, { useState, useEffect } from 'react';
import { AppRegistry, StyleSheet, View, Text } from 'react-native';
import auth, {
  AppleButton,
  AppleAuthError,
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
  AppleAuthRealUserStatus,
} from '@invertase/react-native-apple-authentication';

const user = 'apple@invertase.io';

async function onAppleButtonPress() {
  console.warn('pressed!!');
  const appleAuthRequestResponse = await auth.performRequest({
    requestedOperation: AppleAuthRequestOperation.LOGIN,
    requestedScopes: [AppleAuthRequestScope.EMAIL, AppleAuthRequestScope.FULL_NAME],
  });

  const { nonce } = appleAuthRequestResponse;
// TODO

  console.warn('after press');
}

function RootComponent() {
  if (!auth.isSupported) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <Text>Apple Authentication is not supported on this device.</Text>
      </View>
    );
  }

  const [credentialStateForUser, updateCredentialStateForUser] = useState(-1);

  useEffect(() => {
    async function fetchCredentialState() {
      const credentialState = await auth.getCredentialStateForUser(user);
      updateCredentialStateForUser(credentialState);
    }

    fetchCredentialState().catch(error => updateCredentialStateForUser(`Error: ${error.code}`));

    return () => {};
  }, []);

  return (
    <View style={[styles.container, styles.horizontal]}>
      <Text>Credential State: {JSON.stringify(credentialStateForUser)}</Text>

      <Text style={styles.header}>AppleAuthError Codes</Text>
      <Text>{AppleAuthError.UNKNOWN}</Text>
      <Text>{AppleAuthError.CANCELED}</Text>
      <Text>{AppleAuthError.INVALID_RESPONSE}</Text>
      <Text>{AppleAuthError.NOT_HANDLED}</Text>
      <Text>{AppleAuthError.FAILED}</Text>

      <Text style={styles.header}>Buttons</Text>
      <Text>Continue Styles</Text>
      <AppleButton
        style={styles.appleButton}
        cornerRadius={5}
        buttonStyle={AppleButton.Style.WHITE}
        buttonType={AppleButton.Type.CONTINUE}
        onPress={onAppleButtonPress}
      />
      <AppleButton
        style={styles.appleButton}
        cornerRadius={5}
        buttonStyle={AppleButton.Style.WHITE_OUTLINE}
        buttonType={AppleButton.Type.CONTINUE}
        onPress={onAppleButtonPress}
      />
      <AppleButton
        style={styles.appleButton}
        cornerRadius={5}
        buttonStyle={AppleButton.Style.BLACK}
        buttonType={AppleButton.Type.CONTINUE}
        onPress={onAppleButtonPress}
      />
      <Text>Sign-in Styles</Text>
      <AppleButton
        style={styles.appleButton}
        cornerRadius={5}
        buttonStyle={AppleButton.Style.WHITE}
        buttonType={AppleButton.Type.SIGN_IN}
        onPress={onAppleButtonPress}
      />
      <AppleButton
        style={styles.appleButton}
        cornerRadius={5}
        buttonStyle={AppleButton.Style.WHITE_OUTLINE}
        buttonType={AppleButton.Type.SIGN_IN}
        onPress={onAppleButtonPress}
      />
      <AppleButton
        style={styles.appleButton}
        cornerRadius={5}
        buttonStyle={AppleButton.Style.BLACK}
        buttonType={AppleButton.Type.SIGN_IN}
        onPress={onAppleButtonPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appleButton: {
    width: 200,
    height: 60,
    margin: 10,
  },
  header: {
    margin: 10,
    marginTop: 30,
    fontSize: 18,
    fontWeight: '600',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  horizontal: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    height: 120,
    marginBottom: 16,
    width: 135,
  },
});

AppRegistry.registerComponent('testing', () => RootComponent);
