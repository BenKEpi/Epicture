/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Button,
} from 'react-native';

import {authorize} from 'react-native-app-auth';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const config = {
  issuer: 'https://api.imgur.com/3/',
  clientId: '086f2dc85ce9bd3',
  clientSecret: '67bcfa5ee57255b8c84cb1f1ac7627a7cf2bfb7a',
  redirectUrl: 'com.epicture://callback',
  serviceConfiguration: {
    authorizationEndpoint: 'https://api.imgur.com/oauth2/authorize',
    tokenEndpoint: 'https://api.imgur.com/oauth2/token',
    revocationEndpoint: 'https://api.imgur.com/oauth2/revoke',
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnect: false,
      accessToken: '',
      accessTokenExpirationDate: '',
      refreshToken: '',
      count: 0,
    };
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  sendRequestLogin = async () => {
    try {
      const result = await authorize(config);
      console.log(result);
      //this.props.route.loginFunc(result);
    } catch (error) {
      console.log('Error = ' + error);
    }
  };

  render() {
    return (
      <>
        <StatusBar barStyles="dark-content" />
        <View style={styles.container}>
          <Text style={styles.mainText}>Epicture App Test</Text>
          <View style={styles.sectionContainer}>
            <TouchableOpacity style={styles.button} onPress={this.onPress}>
              <Text>Click Me !</Text>
            </TouchableOpacity>
            <View>
              <Text>You Clicked {this.state.count} times</Text>
            </View>
            <View>
              <Button title="Login" onPress={this.sendRequestLogin} />
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  mainText: {
    fontSize: 25,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
});

export default App;
