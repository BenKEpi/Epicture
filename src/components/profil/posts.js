/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import Api from "../../api";
import {View} from "react-native";
import CardImageComponent from "../card/card";
import {List, Spinner} from "@ui-kitten/components";

export default class PostsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
    }
  }

  componentDidMount() {
    Api.get('account/me/images')
      .then((responseData) => {
        this.setState({data: responseData, isLoading: false});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderItem = ({item}) => {
    return <CardImageComponent elem={item} />;
  };

  render() {
    if (this.state.isLoading && this.state.data.data !== {}) {
      return (
        <View>
          <Spinner />
        </View>
      );
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
