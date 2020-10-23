/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, Component } from 'react';
import { Text, View, Button, Image, SafeAreaView } from 'react-native';
import {Icon, IconElement} from '@ui-kitten/components';
import * as ImagePicker from 'expo-image-picker'

export default class CameraOpen extends Component {

    state = {
      image: null,
      picture: null,
    }

    async componentDiMount() {
      const { status } = await ImagePicker.getCameraRollPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }

    pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);

      if (!result.cancelled) {
        this.setState( { image: result.uri });
      }
    }

    takePicture = async () => {
      const {status} = await ImagePicker.getCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry cant take picture');
      }
      let result = await ImagePicker.launchCameraAsync();

      if (!result.cancelled) {
        this.setState( { picture : result.uri });
      }
    }

    render() {
      return (
          <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Pick an image from camera roll" onPress={this.pickImage}/>
            {this.state.image && <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200 }} />}
            <Button title="Take a photo" onPress={this.takePicture}/>
            {this.state.picture && <Image source={{ uri: this.state.picture }} style={{ width: 200, height: 200 }} />}
          </SafeAreaView>
      );
    };
};