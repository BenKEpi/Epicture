/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import HeaderUpload from "./HeaderUpload";
import CameraOpen from "./camera";

export default class UploadComponent extends Component {
  render() {
    return (
        <SafeAreaView style={{flex: 1}}>
          <HeaderUpload />
          <CameraOpen />
        </SafeAreaView>
    );
  }
}