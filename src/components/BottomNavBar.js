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
import TabBar from '../TabBar';

const Tab = createBottomTabNavigator();

export default function BottomNavBar() {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={GalleryComponent} />
      <Tab.Screen name="Settings" component={SearchComponent} />
    </Tab.Navigator>
  );
}
