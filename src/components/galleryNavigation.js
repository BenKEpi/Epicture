/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import {StyleSheet, View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import Api from '../api';
import {List, Spinner, Tab, TabBar} from '@ui-kitten/components'

import {SafeAreaView} from "react-native-safe-area-context";
import { createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import GalleryComponent from "./gallery";

const TopTab = createMaterialTopTabNavigator();

const TopTabBar = ({navigation, state}) => {
  return (
    <SafeAreaView>
      <TabBar
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <Tab title='Most Viral' />
        <Tab title='Feed' />
      </TabBar>
    </SafeAreaView>
  )
}

export default class TopBarGallery extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      setSelectedIndex: 0,
    }
  };


  render() {
    return (
      <TopTab.Navigator
        tabBar={props => <TopTabBar {...props}/>}
      >
        <TopTab.Screen name="Most Viral" component={GalleryComponent} />
        <TopTab.Screen name="Feed" component={GalleryComponent} />
      </TopTab.Navigator>
    )
  }
}
