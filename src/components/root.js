/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';

import Login from './login';
import {BottomNavBar} from './BottomNavBar';

import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from "react-native-safe-area-context";

class RootComponents extends Component {
  constructor() {
    super();
    this.state = {
      selectedView: 'Login',
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.isLogged !== prevProps.isLogged) {
      this.setState({selectedView: 'NavBar'});
    }
  }

  selectedView = () => {
    switch (this.state.selectedView) {
      case 'Login':
        return <Login />;
      case 'NavBar':
        return <BottomNavBar />;
    }
  };

  render() {
    return <NavigationContainer>{this.selectedView()}</NavigationContainer>;
  }
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.isLogged,
  };
};

export default connect(mapStateToProps)(RootComponents);
