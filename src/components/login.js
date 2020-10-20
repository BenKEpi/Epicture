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
  TouchableOpacity,
  Image,
} from 'react-native';

import * as AuthSession from 'expo-auth-session';

import {connect} from 'react-redux';

import Env from '../../env.json';
import {SafeAreaView} from "react-native-safe-area-context";
import { Button } from "@ui-kitten/components";

class Login extends Component {
  sendRequestLogin = async () => {
    const redirect_uri = AuthSession.makeRedirectUri();
    const result = await AuthSession.startAsync({
      authUrl: `https://api.imgur.com/oauth2/authorize?client_id=${Env.clientId}&response_type=token`,
      returnUrl: redirect_uri
    });

    if (result.type === 'success') {
      this.props.dispatch({type: 'ADD_USERINFOS', value: result});
    } else {
      console.log("Error in Login.js")
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/test.png')} style={styles.image} />
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
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 2},
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
