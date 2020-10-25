/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {TopTitle} from "./gallery/galleryNavigation";
import SearchComponent from './search/search';
import UploadComponent from './upload';
import ProfilComponent from "./profil/profil";

import {HomeTabBar} from '../TabBar';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SearchIcon, HomeIcon, ProfileIcon, UploadIcon} from "./Icons";

const BottomTab = createBottomTabNavigator();

export const BottomNavBar = () => (
  <BottomTab.Navigator tabBar={(props) => <HomeTabBar {...props} />}>
    <BottomTab.Screen
      name="Home"
      component={TopTitle}
      options={{title: 'Home', tabBarIcon: HomeIcon}}
    />
    <BottomTab.Screen
      name="Search"
      component={SearchComponent}
      options={{title: 'Search', tabBarIcon: SearchIcon}}
    />
    <BottomTab.Screen
      name="Upload"
      component={UploadComponent}
      options={{title: 'Upload', tabBarIcon: UploadIcon}}
    />
    <BottomTab.Screen
      name="Settings"
      component={ProfilComponent}
      options={{title: 'Profil', tabBarIcon: ProfileIcon}}
    />
  </BottomTab.Navigator>
);
