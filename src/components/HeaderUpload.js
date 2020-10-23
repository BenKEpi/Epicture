/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Alert, StyleSheet, SafeAreaView, Button, Platform} from 'react-native';
import {TopNavigation} from '@ui-kitten/components';

export default class HeaderUpload extends Component {
  render() {
    return (
        <SafeAreaView style={styles.navbar}>
          <TopNavigation
              title="UPLOAD"
              alignment="center"
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