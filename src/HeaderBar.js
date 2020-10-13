/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Alert} from 'react-native';
import {TopNavigation, Icon, IconElement, TopNavigationAction} from '@ui-kitten/components';

const photoDevice = () => {
  console.log('Photo');
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
  <TopNavigationAction icon={PhotoIcon} onPress={photoDevice} />
);

const Logout = () => (
  <TopNavigationAction icon={LogoutIcon} onPress={AlertLogout} />
);

export const HeaderBar = () => {
  return (
    <TopNavigation
      title="EPICTURE"
      alignment="center"
      accessoryRight={UploadPhoto}
      accessoryLeft={Logout}
    />
  );
};
