/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {Tab, TabBar} from "@ui-kitten/components";

import FavoriteComponent from "./favorite";
import PostsComponent from "./posts";

const ProfileTab = createMaterialTopTabNavigator();

const TopBar = ({navigation, state}) => {
  return (
    <TabBar
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <Tab title='Posts' />
      <Tab title='Favorites' />
    </TabBar>
  )
}

export default class TopBarProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      setSelectedIndex: 0,
    }
  }

  render() {
    return (
      <ProfileTab.Navigator
        tabBar={props => <TopBar {...props} />}
      >
        <ProfileTab.Screen name='Posts' component={PostsComponent} />
        <ProfileTab.Screen name='Favorites' component={FavoriteComponent} />
      </ProfileTab.Navigator>
    )
  }
}
