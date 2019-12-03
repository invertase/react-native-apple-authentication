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

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import auth, { AppleButton } from '@invertase/react-native-apple-authentication';

class Root extends Component {
  constructor(props) {
    super(props);
    try {
      this.runSingleTest().catch(console.error);
    } catch (error) {
      console.error(error);
    }
  }

  async runSingleTest() {
  }

  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <AppleButton
          style={styles.appleButton}
          cornerRadius={5}
          buttonStyle={AppleButton.Style.WHITE_OUTLINE}
          buttonType={AppleButton.Type.CONTINUE}
          onPress={() => console.warn(`Pressed`)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appleButton: {
    width: 200,
    height: 60,
    margin: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
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

AppRegistry.registerComponent('testing', () => Root);
