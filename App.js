/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import Login from './src/login';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Button,
} from 'react-native';

import {authorize} from 'react-native-app-auth';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyles="dark-content" />
        <View style={styles.container}>
          <Text style={styles.mainText}>Epicture App Test</Text>
          <Login />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  mainText: {
    fontSize: 25,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
});
