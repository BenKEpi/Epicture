/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

import {authorize} from 'react-native-app-auth';

import {connect} from 'react-redux';

import Env from '../../env.json';

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
  sendRequestLogin = async () => {
    try {
      const result = await authorize(config);
      console.log(result);
      this.props.dispatch({type: 'ADD_USERINFOS', value: result});
    } catch (error) {
      console.log('Error = ' + error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../img/test.png')} style={styles.image} />
        <Text style={styles.logo}>EPICTURE</Text>
        <TouchableOpacity style={styles.button} onPress={this.sendRequestLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    fontStyle: 'italic',
    color: '#fb5b5a',
    marginBottom: 40,
    textShadowColor: 'white',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  button: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default connect()(Login);
