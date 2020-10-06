/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import RootComponents from './src/components/root';

import {Provider} from 'react-redux';
import store from './src/store/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <IconRegistry icons={EvaIconsPack} />
          <SafeAreaProvider>
            <RootComponents />
          </SafeAreaProvider>
        </ApplicationProvider>
      </Provider>
    );
  }
}
