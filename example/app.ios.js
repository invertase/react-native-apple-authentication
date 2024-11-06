/* eslint-disable no-console */
/**
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
import { StyleSheet, View, Text } from 'react-native';
import { decode } from 'base-64';
import { jwtDecode } from 'jwt-decode';
import { appleAuth, AppleButton } from '@invertase/react-native-apple-authentication';

// polyfill for "atob" so that jwt.decode will work
global.atob = decode;

/**
 * You'd technically persist this somewhere for later use.
 */
let userId = 'unknown';
let userName = 'unknown';
let userEmail = 'unknown';

/**
 * Fetches the credential state for the current user, if any, and updates state on completion.
 */
async function fetchAndUpdateCredentialState(updateCredentialStateForUser) {
  if (userId === 'unknown') {
    updateCredentialStateForUser('User not signed in.');
  } else {
    const credentialState = await appleAuth.getCredentialStateForUser(userId);
    if (credentialState === appleAuth.State.AUTHORIZED) {
      updateCredentialStateForUser('AUTHORIZED');
    } else {
      updateCredentialStateForUser(credentialState);
    }
  }
}

async function onUpdateCredentialStateButtonPress(updateCredentialStateForUser) {
  console.warn('Beginning Credential Update');
  fetchAndUpdateCredentialState(updateCredentialStateForUser).catch(error =>
    updateCredentialStateForUser(`Error: ${error.code}`),
  );
}

/**
 * Starts the Sign In flow.
 */
async function onAppleButtonPress(updateCredentialStateForUser) {
  console.warn('Beginning Apple Authentication');

  // start a login request
  try {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    console.log('appleAuthRequestResponse', appleAuthRequestResponse);

    const {
      user: newUser,
      email,
      fullName,
      identityToken,
      nonce,
      realUserStatus /* etc */,
    } = appleAuthRequestResponse;

    userId = newUser;
    email ? (userEmail = email) : (userEmail = 'unknown');
    fullName && fullName.givenName && fullName.familyName
      ? (userName = `${fullName.givenName} ${fullName.familyName}`)
      : (userName = 'unknown');

    // The email and fullName are only provided on the first sign in to an app.
    // But, we can get the email from the JWT every time if we decode it.
    const decoded = jwtDecode(identityToken);
    console.log('decoded token: ', decoded);
    userEmail === 'unknown' && decoded.email
      ? (userEmail = decoded.email)
      : (userEmail = 'unknown');

    fetchAndUpdateCredentialState(updateCredentialStateForUser).catch(error =>
      updateCredentialStateForUser(`Error: ${error.code}`),
    );

    if (identityToken) {
      // e.g. sign in with Firebase Auth using `nonce` & `identityToken`
      console.log(nonce, identityToken);
    } else {
      // no token - failed sign-in?
    }

    if (realUserStatus === appleAuth.UserStatus.LIKELY_REAL) {
      console.log("I'm a real person!");
    }

    console.warn(`Apple Authentication Completed, ${userId}, ${email}`);
  } catch (error) {
    if (error.code === appleAuth.Error.CANCELED) {
      console.warn('User canceled Apple Sign in.');
    } else {
      console.error(error);
    }
  }
}

export default function RootComponent() {
  const [credentialStateForUser, updateCredentialStateForUser] = useState(-1);
  useEffect(() => {
    if (!appleAuth.isSupported) return;

    fetchAndUpdateCredentialState(updateCredentialStateForUser).catch(error =>
      updateCredentialStateForUser(`Error: ${error.code}`),
    );
  }, []);

  useEffect(() => {
    if (!appleAuth.isSupported) return;

    return appleAuth.onCredentialRevoked(async () => {
      console.warn('Credential Revoked');
      fetchAndUpdateCredentialState(updateCredentialStateForUser).catch(error =>
        updateCredentialStateForUser(`Error: ${error.code}`),
      );
    });
  }, []);

  if (!appleAuth.isSupported) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <Text>Apple Authentication is not supported on this device.</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, styles.horizontal]}>
      <Text
        style={styles.header}
        onPress={() => onUpdateCredentialStateButtonPress(updateCredentialStateForUser)}
      >
        Credential State
      </Text>
      <Text>{credentialStateForUser}</Text>

      <Text
        style={styles.header}
        onPress={() => onUpdateCredentialStateButtonPress(updateCredentialStateForUser)}
      >
        User Information
      </Text>
      <Text>{`id: ${userId} / email: ${userEmail} / name: ${userName}`}</Text>

      <Text style={styles.header}>Buttons</Text>
      <Text>Continue Styles</Text>
      <AppleButton
        style={styles.appleButton}
        cornerRadius={5}
        buttonStyle={AppleButton.Style.WHITE}
        buttonType={AppleButton.Type.CONTINUE}
        onPress={() => onAppleButtonPress(updateCredentialStateForUser)}
      />
      <AppleButton
        style={styles.appleButton}
        cornerRadius={5}
        buttonStyle={AppleButton.Style.WHITE_OUTLINE}
        buttonType={AppleButton.Type.CONTINUE}
        onPress={() => onAppleButtonPress(updateCredentialStateForUser)}
      />
      <AppleButton
        style={styles.appleButton}
        cornerRadius={5}
        buttonStyle={AppleButton.Style.BLACK}
        buttonType={AppleButton.Type.CONTINUE}
        onPress={() => onAppleButtonPress(updateCredentialStateForUser)}
      />
      <Text>Sign-in Styles</Text>
      <AppleButton
        style={styles.appleButton}
        cornerRadius={5}
        buttonStyle={AppleButton.Style.WHITE}
        buttonType={AppleButton.Type.SIGN_IN}
        onPress={() => onAppleButtonPress(updateCredentialStateForUser)}
      />
      <AppleButton
        style={styles.appleButton}
        cornerRadius={5}
        buttonStyle={AppleButton.Style.WHITE_OUTLINE}
        buttonType={AppleButton.Type.SIGN_IN}
        onPress={() => onAppleButtonPress(updateCredentialStateForUser)}
      />
      <AppleButton
        style={styles.appleButton}
        cornerRadius={5}
        buttonStyle={AppleButton.Style.BLACK}
        buttonType={AppleButton.Type.SIGN_IN}
        onPress={() => onAppleButtonPress(updateCredentialStateForUser)}
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
});
