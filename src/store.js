/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

//import {StyleSheet, View, Text, Button, ColorAndroid} from 'react-native';

//import {authorize} from 'react-native-app-auth';

class API {
  constructor() {
    this.accessToken = ''
    this.accessTokenExpirationDate = ''
    this.authorizeAdditionalParameters = ''
    this.idToken = null
    this.refreshToken = ''
    this.scopes = []
    this.tokenType = ''
    this.account_id = ''
    this.account_username = ''
  }
}
