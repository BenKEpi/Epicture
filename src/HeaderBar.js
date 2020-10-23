/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Alert, StyleSheet, SafeAreaView, Button, Platform} from 'react-native';
import {TopNavigation, Layout, Icon, IconElement, TopNavigationAction} from '@ui-kitten/components';

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

const LogoutIcon = (style): IconElement => (
    <Icon {...style} name="log-out-outline"/>
);

const Logout = () => (
        <TopNavigationAction icon={LogoutIcon} onPress={AlertLogout}/>
    );

export default class HeaderBar extends Component {
  render() {
    return (
        <SafeAreaView style={styles.navbar}>
          <TopNavigation
              title="EPICTURE"
              alignment="center"
              accessoryLeft={Logout}
          />
        </SafeAreaView>
    );
  };
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 48 : 0
  },
});