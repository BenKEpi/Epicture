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
import CardImageComponent from "./card";
import {List, Spinner} from "@ui-kitten/components";
import {connect} from "react-redux";

class FavoriteComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
    }
  }

  componentDidMount() {
    Api.get('account/' + this.props.username + '/favorites/0')
      .then((responseData) => {
        console.log(responseData);
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
    if (this.state.isLoading) {
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

const mapStateToProps = (state) => {
  return {
    userInfos: state.userInfos,
    username: state.username,
    accountId: state.accountId,
  };
};

export default connect(mapStateToProps)(FavoriteComponent);
