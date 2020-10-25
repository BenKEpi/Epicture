/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from "react";
import Api from "../../api";
import {IconDown, IconDownOut, IconFavorited, IconUnfavorited, IconUps, IconUpsOut} from "../Icons";
import {StyleSheet, View} from "react-native";
import {Button, Layout, Text} from "@ui-kitten/components";
import {connect} from "react-redux";

class BottomCardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      isFavorited: false,
      isVote: 'veto',
      imgId: '',
    };
  }

  componentDidMount() {
    if (this.props.elem.is_album && !this.props.elem.favorite)
      this.setState({
        description:  this.props.elem.images[0].description,
        imgId: this.props.elem.images[0].id,
      });
    else
      this.setState({
        description:  this.props.elem.description,
        imgId: this.props.elem.id,
      });

    this.setState({
      isFavorited: this.props.elem.favorite,
      isVote: this.props.elem.vote,
    })
  }

  postInFavorite = () => {
    Api.post('image/' + this.state.imgId + '/favorite', this.props.userInfos.params.access_token)
      .then((responseData) => {
        console.log(responseData)
        if (responseData.data === 'favorited') {
          this.setState({isFavorited: true})
          this.props.elem.favorite_count -= 1;
        } else {
          this.setState({isFavorited: false})
          this.props.elem.favorite_count += 1;
        }
      })
      .catch((error) => {
        console.log(error);
      })
  };

  postVote = (vote) => {
    let value = vote
    if (this.state.isVote === vote) {
      value = 'veto';
    }
    Api.post('gallery/' + this.state.imgId + '/vote/' + value, this.props.userInfos.params.access_token)
      .then((responseData) => {
        this.setState({isVote: value})
        if (value === 'veto') {
          if (vote === 'up') {
            this.props.elem.ups += 1;
          } else {
            this.props.elem.downs += 1;
          }
        } else {
          if (value === 'up') {
            console.log("WTF !")
            this.props.elem.ups -= 1;
          } else {
            this.props.elem.downs -= 1;
          }
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
      <View style={styles.lowerCard}>
        <Text style={styles.textDescription} >{this.state.description}</Text>
        <Layout style={styles.lowerTitle}>
          <Button title='ups' appearance='ghost' status='success' accessoryLeft={this.selectedIconUps()} onPress={() => this.postVote('up')}>{this.props.elem.ups}</Button>
          <Button title='down' appearance='ghost' status='danger' accessoryLeft={this.selectedIconDowns()} onPress={() => this.postVote('down')}>{this.props.elem.downs}</Button>
          <Button title='favorite' appearance='ghost' status='info' accessoryLeft={this.selectedIconFav()} onPress={this.postInFavorite}>{this.props.elem.favorite_count}</Button>
        </Layout>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  textDescription: {
    fontSize: 13,
    color: 'white',
  },
  lowerTitle: {
    flexDirection: "row",
    justifyContent: 'space-between',
    borderRadius: 40,
  },
  lowerCard: {
    padding: 8,
  },
});

const mapStateToProps = (state) => {
  return {
    userInfos: state.userInfos,
    username: state.username,
    accountId: state.accountId,
  };
};

export default connect(mapStateToProps)(BottomCardComponent);
