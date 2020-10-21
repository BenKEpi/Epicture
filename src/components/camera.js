/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions'
import { Dimensions } from "react-native-web";

export default class CameraOpen extends Component {

    constructor(props) {
      super(props);
      console.log('pute pute pute');
      camera = null;
      this.state = {
        hasCameraPermission: null,
      }
    };

    /*async componentDidMount() {
      const camera = await Permissions.askAsync(Permissions.CAMERA);
      const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
      const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');
      this.setState({ hasCameraPermission });
    };*/

    render() {
      const { hasCameraPermission } = this.state;

      if (hasCameraPermission === null) {
        return <View />;
      } else if (hasCameraPermission === false) {
        return <Text>Access to camera has been denied.</Text>;
      }

      return (
          <View>
            <Camera
                //style={styles.preview}
                ref={camera => this.camera = camera}
            />
          </View>
      );
    };
};

/*const { width: winWidth, height: winHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  preview: {
    height: winHeight,
    width: winWidth,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
});*/