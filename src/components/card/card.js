/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Image, StyleSheet} from "react-native";
import BottomCardComponent from "./bottomCard";
import {connect} from "react-redux";
import TopCardComponent from "./TopCard";

class CardImageComponent extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      imgUrl: null,
      imgId: null,
      isLoading: true,
    }
  }

  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      this.getImageUrl();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getImageUrl = () => {
    if (this.props.elem.is_album && !this.props.elem.favorite) {
      this.setState({
        imgId: this.props.elem.images[0].id,
        imgUrl: this.props.elem.images[0].link,
      });
    } else {
      this.setState({
        imgId: this.props.elem.id,
        imgUrl: this.props.elem.link,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TopCardComponent elem={this.props.elem} />
        <Image style={styles.tinyPicture} source={{uri: this.state.imgUrl}} resizeMode="stretch"/>
        <BottomCardComponent elem={this.props.elem}/>
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
  tinyPicture: {
    alignItems: 'center',
    width: '100%',
    height: 500,
  },
});

const mapStateToProps = (state) => {
  return {
    userInfos: state.userInfos,
  };
};

export default connect(mapStateToProps)(CardImageComponent);
