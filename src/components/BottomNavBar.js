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

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeTabBar} from '../TabBar';
import {Icon, IconElement} from '@ui-kitten/components';

const TestIcon = (style): IconElement => (
  <Icon {...style} name="person-outline" />
);

const BottomTab = createBottomTabNavigator();

export const BottomNavBar = () => (
  <BottomTab.Navigator tabBar={props => <HomeTabBar {...props} />}>
    <BottomTab.Screen
      name="Home"
      component={GalleryComponent}
      options={{title: 'Home', tabBarIcon: TestIcon}}
    />
    <BottomTab.Screen
      name="Settings"
      component={SearchComponent}
      options={{title: 'Settings', tabBarIcon: TestIcon}}
    />
  </BottomTab.Navigator>
);
