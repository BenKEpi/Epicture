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
    Api.get('gallery/user/viral/month/0.json')
      .then((responseData) => {
        this.setState({data: responseData, isLoading: false});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderItem = ({item}) => <RenderGallery elem={item} />;

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

class RenderGallery extends Component {
  constructor() {
    super();
    this.state = {
      image: null,
      selectedView: '',
    };
  }

  selectedView = () => {
    if (this.props.elem.is_album === true) {
      return (
        <Image
          style={styles.tinyPicture}
          source={{uri: this.props.elem.images[0].link}}
        />
      );
    } else {
      return (
        <Image
          style={styles.tinyPicture}
          source={{uri: this.props.elem.link}}
        />
      );
    }
  };

  render() {
    return (
      <View>
        {this.selectedView()}
        <Text>{this.props.elem.is_album}</Text>
        <Text>{this.props.elem.account_url}</Text>
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
  tinyPicture: {
    alignSelf: 'center',
    flex: 1,
    borderRadius: 10,
    width: '90%',
    height: 300,
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
