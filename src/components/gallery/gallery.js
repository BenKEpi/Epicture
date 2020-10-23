/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import {StyleSheet, View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import Api from '../../api';
import {List, Spinner} from '@ui-kitten/components'

import CardImageComponent from "./card";

class GalleryComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    Api.get('gallery/hot/viral/month/0')
      .then((responseData) => {
        this.setState({data: responseData, isLoading: false});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderItem = ({item}) => {
    if (
      (item.is_album === true && item.images[0].type === 'video/mp4') ||
      item.type === 'video/mp4'
    ) {
      return <View/>;
    } else {
      return <CardImageComponent elem={item} />;
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <Spinner style={styles.spinner} />
        </View>
      )
    } else {
      return (
        <View>
          <List
            data={this.state.data.data}
            renderItem={this.renderItem}
          />
        </View>
      );
    }
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
  spinner: {
    width: 40,
    height: 40,
  }
});

const mapStateToProps = (state) => {
  return {
    userInfos: state.userInfos,
    username: state.username,
    accountId: state.accountId,
  };
};

export default connect(mapStateToProps)(GalleryComponent);
