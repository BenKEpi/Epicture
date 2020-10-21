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
import {Avatar, Button, Icon, IconElement, Layout} from "@ui-kitten/components";
import Api from '../api';
import {connect} from "react-redux";

const IconFavorited = (props): IconElement => (
  <Icon {...props} name="heart" />
);

const IconUnfavorited = (props): IconElement => (
  <Icon {...props} name="heart-outline" />
);

const IconUpsOut = (props): IconElement => (
  <Icon {...props} name="arrow-circle-up-outline" />
);

const IconUps = (props): IconElement => (
  <Icon {...props} name="arrow-circle-up" />
);

const IconDownOut = (props): IconElement => (
  <Icon {...props} name="arrow-circle-down-outline" />
);

const IconDown = (props): IconElement => (
  <Icon {...props} name="arrow-circle-down" />
);

class CardImageComponent extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      imgUrl: null,
      imgWidth: null,
      imgHeight: null,
      imgId: null,
      description: null,
      avatarUrl: null,
      isLoading: true,
      isFavorited: false,
      isVote: 'veto',
    }
  }

  componentDidMount() {
    this._isMounted = true;

    if (this._isMounted) {
      this.getImageUrl();
      Api.get('account/' + this.props.elem.account_url + '/avatar')
        .then((responseData) => {
          this.setState({avatarUrl: responseData.data.avatar});
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
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
    this.setState({imgId: this.props.elem.cover})
    this.setState({isFavorited: this.props.elem.favorite})
    this.setState({isVote: this.props.elem.vote})
  }

  postInFavorite = () => {
    Api.post('image/' + this.state.imgId + '/favorite', this.props.userInfos.params.access_token)
      .then((responseData) => {
        if (responseData.data === 'favorited') {
          this.setState({isFavorited: true})
        } else {
          this.setState({isFavorited: false})
        }
      })
      .catch((error) => {
        console.log(error);
      })
  };

  postVote = (vote) => {
    if (this.state.isVote !== 'veto') {
      vote = 'veto';
    }
    Api.post('gallery/' + this.state.imgId + '/vote/' + vote, this.props.userInfos.params.access_token)
      .then((responseData) => {
        console.log(vote, ' ', responseData);
        if (vote === 'up') {
          this.setState({isVote: 'up'})
        } else if (vote === 'down') {
          this.setState({isVote: 'down'})
        } else {
          this.setState({isVote: 'veto'})
        }
      })
      .catch((error) => {
        console.log(error);
      })
  };

  selectedIconFav= () => {
    switch (this.state.isFavorited) {
      case true:
        return IconFavorited;
      case false:
        return IconUnfavorited;
    }
  }

  selectedIconUps = () => {
    switch (this.state.isVote) {
      case 'up':
        return IconUps;
      default:
        return IconUpsOut;
    }
  }

  selectedIconDowns = () => {
    switch (this.state.isVote) {
      case 'down':
        return IconDown;
      default:
        return IconDownOut;
    }
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
        <Image style={styles.tinyPicture} source={{uri: this.state.imgUrl}} resizeMode="stretch"/>
        <View style={styles.lowerCard}>
          <Text style={styles.textDescription}>{this.state.description}</Text>
          <Layout style={styles.lowerTitle}>
            <Button title='ups' appearance='ghost' status='success' accessoryLeft={this.selectedIconUps()} onPress={this.postVote('up')}>{this.props.elem.ups}</Button>
            <Button title='down' appearance='ghost' status='danger' accessoryLeft={this.selectedIconDowns()} onPress={this.postVote('down')}>{this.props.elem.downs}</Button>
            <Button title='favorite' appearance='ghost' status='info' accessoryLeft={this.selectedIconFav()} onPress={this.postInFavorite}>{this.props.elem.favorite_count}</Button>
          </Layout>
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

const mapStateToProps = (state) => {
  return {
    userInfos: state.userInfos,
  };
};

export default connect(mapStateToProps)(CardImageComponent);
