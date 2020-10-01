/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import {StyleSheet, View, Text, Button, ColorAndroid} from 'react-native';

import {authorize} from 'react-native-app-auth';

import Store from './store'
import Env from  '../env.json'

const config = {
  issuer: Env.baseURL,
  clientId: Env.clientId,
  clientSecret: Env.clientSecret,
  redirectUrl: 'com.epicture://callback',
  serviceConfiguration: {
    authorizationEndpoint: 'https://api.imgur.com/oauth2/authorize',
    tokenEndpoint: 'https://api.imgur.com/oauth2/token',
    revocationEndpoint: 'https://api.imgur.com/oauth2/revoke',
  },
};

export default class Login extends Component {

  sendRequestLogin = async () => {
    try {
      const result = await authorize(config);
      console.log(result);
      Store.accessToken = result.accessToken
      Store.accessTokenExpirationDate = result.accessTokenExpirationDate
      Store.authorizeAdditionalParameters = result.authorizeAdditionalParameters
      Store.idToken = result.idToken
      Store.refreshToken = result.refreshToken
      Store.scopes = result.scopes
      Store.account_id = result.tokenAdditionalParameters.account_id
      Store.account_username = result.tokenAdditionalParameters.account_username
      Store.tokenType = result.tokenType

    } catch (error) {
      console.log('Error = ' + error);
    }
    console.log("Store = ", Store)
  };

  render() {
    return (
      <View>
        <Button title="Connexion" style={styles.button} onPress={this.sendRequestLogin} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFCC',
    padding: 30,
    margin: 10
  },
  TitleText: {
    alignItems: 'center',
  },
});
