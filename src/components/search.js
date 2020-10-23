/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, SafeAreaView, Platform, Button} from 'react-native';
import HeaderBar from '../HeaderBar';

export default class SearchComponent extends Component {

  render() {
    return (
        <SafeAreaView style={{flex: 1}}>
          <HeaderBar />
        </SafeAreaView>
    );
  }
}