/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";

import TopBarProfile from "./barProfile";
import ProfilTopBarComponent from "./topProfile";

export default class ProfilComponent extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container} level='1'>
        <ProfilTopBarComponent />
        <View style={styles.container}>
          <TopBarProfile />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
  },
});
