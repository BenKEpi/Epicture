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

class GalleryComponent extends Component {
  constructor() {
    super();
    this.state = {
      userInfos: {},
      isLoading: false,
    };

  }

  render() {
    console.log(this.props.userInfos.accessToken);
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
