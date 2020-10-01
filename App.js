/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import Login from './src/login';
import GalleryView from "./src/gallery";

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

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLogged: false,
      selectedView: 'Login',
    }
  }

  setView = (view) => {
    this.setState({selectedView: view})
  }

  selectedView = () => {
    switch (this.state.selectedView) {
      case 'Login':
        return <Login callback={this.getResponse.bind(this)}/>
      case 'Gallery':
        return <GalleryView />
    }
  }

  getResponse(isLogged) {
    this.setState({isLogged});
    if (this.state.isLogged === true) {
      this.setView('Gallery')
    }

    console.log(this.state.isLogged)
  }

  render() {
    return (
      <>
        <StatusBar barStyles="dark-content" />
        <View style={styles.container}>
          { this.selectedView() }
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
  mainText: {
    fontSize: 25,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
});
