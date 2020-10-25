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
import Api from '../api'
import {retrySymbolicateLogNow} from "react-native/Libraries/LogBox/Data/LogBoxData";
import {connect} from "react-redux";


const PhotoIcon = (style): IconElement => (
    <Icon {...style} name="camera-outline"/>
    );

const UploadIcon = (style): IconElement => (
    <Icon {...style} name="upload-outline"/>
    );

class CameraOpen extends Component {

    state = {
      image: null,
      picture: null,
      data: {},
      isUpload: false,
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
        base64: true,
      });
      //console.log(result);
      if (!result.cancelled) {
        this.setState( { image: result.uri });
      }
      Api.uploadImage(result, this.props.userInfos.params.access_token).then(r => {console.log(r)})
    }

    takePicture = async () => {
      const { status } = await ImagePicker.getCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry cant take picture');
      }
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true,
      });

      Api.uploadImage(result, this.props.userInfos.params.access_token).then(r => {console.log(r)})
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
    margin: 'auto',
  },
});

const mapStateToProps = (state) => {
  return {
    userInfos: state.userInfos,
    username: state.username,
    accountId: state.accountId,
  };
};

export default connect(mapStateToProps)(CameraOpen);