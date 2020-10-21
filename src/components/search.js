/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {HeaderBar} from '../HeaderBar';
import {StyleSheet, View, Text, Image, SafeAreaView, Platform, Button} from 'react-native';
import Api from '../api';
import CameraOpen from "./camera";


export default class SearchComponent extends Component {

  getCamera = () => {
    return <CameraOpen/>
  };

  render() {
    return (
        <SafeAreaView style={styles.navbar}>
          <HeaderBar />
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 48 : 0
  },
});