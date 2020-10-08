/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import env from '../../env.json';
import Api from '../api';

class GalleryComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      isLoading: false,
    };
  }

  componentDidMount() {
    Api.get('/gallery/top/viral/month/0.json')
      .then((responseData) => {
        this.setState({data: responseData});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View>
        <Text style={styles.mainText}>
          Welcome to Gallery View !{this.props.username}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 25,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    userInfos: state.userInfos,
    username: state.username,
    accountId: state.accountId,
  };
};

export default connect(mapStateToProps)(GalleryComponent);
