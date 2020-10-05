/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import {StyleSheet, View, Text, Button} from 'react-native';

import {authorize} from 'react-native-app-auth';

import { connect } from 'react-redux';

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

class Login extends Component {
  theUserIsLogged() {
    this.props.callback(true)
  }
  sendRequestLogin = async () => {
    try {
      const result = await authorize(config);
      console.log(result);
      this.props.dispatch({ type: 'ADD_USERINFOS', value: result })
      this.theUserIsLogged()

    } catch (error) {
      console.log('Error = ' + error);
    }
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

export default connect()(Login)
