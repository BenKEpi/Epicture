/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, Component } from 'react';
import { Text, View, Image, SafeAreaView, StyleSheet } from 'react-native';
import {Button, Icon, IconElement} from '@ui-kitten/components';
import * as ImagePicker from 'expo-image-picker'


const PhotoIcon = (style): IconElement => (
    <Icon {...style} name="camera-outline"/>
    );

const UploadIcon = (style): IconElement => (
    <Icon {...style} name="upload-outline"/>
    );

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
            <Button style={styles.button} accessoryLeft={UploadIcon} onPress={this.pickImage}>
              Upload Image
            </Button>
            {this.state.image && <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200 }} />}
            <Button style={styles.button} accessoryLeft={PhotoIcon} onPress={this.takePicture}>
              Take Photo
            </Button>
            {this.state.picture && <Image source={{ uri: this.state.picture }} style={{ width: 200, height: 200 }} />}
          </SafeAreaView>
      );
    };
};

const styles = StyleSheet.create({
  button: {
    margin: 2,
  },
});