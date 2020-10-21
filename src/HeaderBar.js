/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Alert, StyleSheet, SafeAreaView} from 'react-native';
import {TopNavigation, Layout, Icon, IconElement, TopNavigationAction} from '@ui-kitten/components';
import {createStackNavigator} from '@react-navigation/stack'
import CameraOpen from "./components/camera";

const GetCamera = () => {
    console.log("Pute");
    return <CameraOpen />
};

const AlertLogout = () => {
  Alert.alert(
      'Logout',
      'Do you want to logout from app ?',
      [
        {text: 'Yes', onPress: () => console.log('Yes clicked')},
        {text: 'No', onPress: () => console.log('No cliked'), style: "cancel"},
      ],
      {
        cancelable: true
      }
  );
}

const PhotoIcon = (style): IconElement => (
  <Icon {...style} name="camera-outline" />
);

const LogoutIcon = (style): IconElement => (
  <Icon {...style} name="log-out-outline" />
);

const UploadPhoto = () => (
  <TopNavigationAction icon={PhotoIcon} />
);

const Logout = () => (
  <TopNavigationAction icon={LogoutIcon} onPress={AlertLogout} />
);

export const HeaderBar = () => {
  return (
      <SafeAreaView>
        <TopNavigation
        title="EPICTURE"
        alignment="center"
        accessoryRight={UploadPhoto}
        accessoryLeft={Logout}
      />
      </SafeAreaView>
  );
};