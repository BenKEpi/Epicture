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

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootComponents />
      </Provider>
    );
  }
}
