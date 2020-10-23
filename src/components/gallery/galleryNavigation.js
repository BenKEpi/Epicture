/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, Fragment} from 'react';

import { Tab, TabBar, Layout, MenuItem, OverflowMenu, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

import {SafeAreaView} from "react-native-safe-area-context";
import { createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {TrendUp, Person, StarOut, OptionIcon} from "../Icons"
import GalleryComponent from "./gallery";
import FavoriteComponent from "./favorite";
import FeedComponent from "./feed";

import {IconFavorited} from "../Icons";
import {StyleSheet, View} from "react-native";

const TopTab = createMaterialTopTabNavigator();

const TopTabBar = ({navigation, state}) => {
  return (
    <View>
      <TabBar
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <Tab title='Most Viral' />
        <Tab title='Feed' />
        <Tab title='Favorite'/>
      </TabBar>
    </View>
  )
}

class TopBarGallery extends Component {
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
        <TopTab.Screen name="Feed" component={FeedComponent} />
        <TopTab.Screen name="Favorite" component={FavoriteComponent} />
      </TopTab.Navigator>
    )
  }
}

export const TopTitle = () => {

  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={OptionIcon} onPress={toggleMenu}/>
  );

  const renderRightActions = () => (
    <Fragment>
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}>
        <MenuItem title='About'/>
        <MenuItem title='Logout'/>
      </OverflowMenu>
    </Fragment>
  );

  return (
    <SafeAreaView style={styles.container} level='1'>
      <TopNavigation
        alignment='center'
        title='Gallery'
        accessoryRight={renderRightActions}
      />
      <TopBarGallery />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
  },
  filter: {
    marginTop: 30,
  }
});
