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
import env from '../../env.json';
import Api from '../api';
import {List, ListItem} from '@ui-kitten/components';

class GalleryComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    Api.get('/gallery/top/viral/month/0.json')
      .then((responseData) => {
        console.log(responseData);
        this.setState({data: responseData, isLoading: false});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderItem = ({item, index}) => (
    // <ListItem title={`${item.account_url} ${index + 1}`}>
    //   <Image style={styles.tinyPicture} source={{uri: item.link}} />
    // </ListItem>
    <ListItem>
      <View>
        <Image
          style={styles.tinyPicture}
          source={{uri: item.link}}
          resizeMode="cover"
        />
      </View>
    </ListItem>
  );

  render() {
    return (
      <View>
        <List
          style={styles.container}
          data={this.state.data.data}
          renderItem={this.renderItem}
        />
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
  container: {},
  tinyPicture: {
    alignSelf: 'center',
    flex: 1,
    borderRadius: 75,
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
