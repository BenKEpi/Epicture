/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import GalleryComponent from './gallery';
import SearchComponent from './search';
import UploadComponent from './upload';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeTabBar} from '../TabBar';
import {Icon, IconElement} from '@ui-kitten/components';

const ProfileIcon = (style): IconElement => (
  <Icon {...style} name="person-outline" />
);

const HomeIcon = (style): IconElement => (
  <Icon {...style} name="monitor-outline" />
);

const UploadIcon = (style): IconElement => (
  <Icon {...style} name="cloud-upload-outline" />
);

const BottomTab = createBottomTabNavigator();

export const BottomNavBar = () => (
  <BottomTab.Navigator tabBar={(props) => <HomeTabBar {...props} />}>
    <BottomTab.Screen
      name="Home"
      component={GalleryComponent}
      options={{title: 'Home', tabBarIcon: HomeIcon}}
    />
    <BottomTab.Screen
      name="Upload"
      component={UploadComponent}
      options={{title: 'Upload', tabBarIcon: UploadIcon}}
    />
    <BottomTab.Screen
      name="Settings"
      component={SearchComponent}
      options={{title: 'Settings', tabBarIcon: ProfileIcon}}
    />
  </BottomTab.Navigator>
);
