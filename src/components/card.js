/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Image, StyleSheet, Text, Dimensions} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Avatar, Button, Divider, Icon, IconElement} from "@ui-kitten/components";
import Api from '../api';

const FavIcon = (style): IconElement => (
  <Icon {...style} name="heart-outline" />
);


export default class CardImageComponent extends Component {
  constructor() {
    super();
    this.state = {
      imgUrl: null,
      imgWidth: null,
      imgHeight: null,
      description: null,
      avatarUrl: null,
      selectedView: '',
      isLoading: true,
    }
  }

  componentDidMount() {
    this.getImageUrl();
    Api.get('account/' + this.props.elem.account_url + '/avatar')
      .then((responseData) => {
        this.setState({avatarUrl: responseData.data.avatar});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getImageUrl = () => {
    if (this.props.elem.is_album) {
      this.setState({
        imgUrl: this.props.elem.images[0].link,
        imgHeight: this.props.elem.images[0].height,
        imgWidth: this.props.elem.images[0].width,
        description: this.props.elem.images[0].description,
      });
    } else {
      this.setState({
        imgUrl: this.props.elem.link,
        imgHeight: this.props.elem.height,
        imgWidth: this.props.elem.width,
        description: this.props.elem.description,
      });
    }
  }

  getImageSize = () => {
    let imageWidth = null;
    let imageHeight = null;
    let newHeight = null;
    let newWidth = null;
    let windowSize = Dimensions.get('window');
    let widthMax = windowSize.width - 40;

    imageWidth = this.props.data.cover_width;
    if (this.props.data.cover_width === undefined)
      imageWidth = this.props.data.width;

    imageHeight = this.props.data.cover_height;
    if (this.props.data.cover_height === undefined)
      imageHeight = this.props.data.height;

    newWidth = widthMax;
    if (imageHeight === undefined || imageWidth === undefined) {
      newHeight = newWidth;
    } else {
      this.coef = imageHeight / imageWidth
      newHeight = widthMax * this.coef
    }
    this.setState({imgHeight: newHeight, imageWidth: newWidth});
  }

  handleImageLoading() {
    setInterval(() => {
      this.setState({isLoading: false})
    }, 4000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.avatarTitle}>
          <Avatar source={{uri: this.state.avatarUrl}} />
          <View style={styles.title}>
            <Text style={styles.textTitle}>{this.props.elem.title}</Text>
            <View style={styles.lowerTitle}>
              <Text style={styles.textAccount}>{this.props.elem.account_url}</Text>
              <View style={styles.test}>
                <Text style={styles.textNbView}>{this.props.elem.views}</Text>
                <Icon style={styles.miniIcon} fill='grey' name="eye" />
              </View>
            </View>
          </View>
        </View>
        <Image style={styles.tinyPicture} source={{uri: this.state.imgUrl, width: this.state.imgWidth, height: this.state.imgHeight}} resizeMode="stretch"/>
        <View style={styles.lowerCard}>
          <Text style={styles.textDescription}>{this.state.description}</Text>
          <Icon style={styles.icons} fill='white' name="heart-outline" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#131729',
    margin: 10,
    borderRadius: 20,
  },
  textTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  textAccount: {
    fontSize: 14,
    color: 'grey',
  },
  textDescription: {
    fontSize: 13,
    color: 'white',
  },
  textNbView: {
    fontSize: 11,
    color: 'grey',
    paddingRight: 3,
    alignItems: 'center',
  },
  tinyPicture: {
    alignItems: 'center',
    width: '100%',
    height: 500,
  },
  avatarTitle: {
    flexDirection: "row",
    padding: 7,
  },
  title: {
    flexDirection: "column",
    marginHorizontal: 8,
    width: '85%',
  },
  lowerTitle: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  test:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  lowerCard: {
    padding: 8,
  },
  miniIcon: {
    width: 15,
    height: 15,
  },
  icons: {
    width: 25,
    height: 25,
  },
});
