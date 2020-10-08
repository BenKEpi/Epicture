/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import {TopNavigation, Icon, IconElement, TopNavigationAction} from '@ui-kitten/components';

const photoDevice = () => {
  console.log('Photo');
}

const PhotoIcon = (style): IconElement => (
  <Icon {...style} name="camera-outline" />
);

const UploadPhoto = () => (
  <TopNavigationAction icon={PhotoIcon} onPress={photoDevice} />
);

export const HeaderBar = () => {
  return (
    <TopNavigation
      title="EPICTURE"
      alignment="center"
      accessoryRight={UploadPhoto}
    />
  );
};
