/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import Api from "../../api";
import {StyleSheet, Text, View} from "react-native";
import {Avatar, Icon} from "@ui-kitten/components";

export default class TopCardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarUrl: null,
    }
  }

  componentDidMount() {
    Api.get('account/' + this.props.elem.account_url + '/avatar')
      .then((responseData) => {
        this.setState({avatarUrl: responseData.data.avatar});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.avatarTitle}>
        <Avatar source={{uri: this.state.avatarUrl}} />
        <View style={styles.title}>
          <Text style={styles.textTitle}>{this.props.elem.title}</Text>
          <View style={styles.lowerTitle}>
            <Text style={styles.textAccount}>{this.props.elem.account_url}</Text>
            <View style={styles.test}>
              <Text style={styles.textNbView}>{this.props.elem.views}</Text>
              <Icon style={styles.icon} fill='grey' name="eye" />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  textAccount: {
    fontSize: 14,
    color: 'grey',
  },
  textNbView: {
    fontSize: 11,
    color: 'grey',
    paddingRight: 3,
    alignItems: 'center',
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
    borderRadius: 40,
  },
  test:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 15,
    height: 15,
  },
});
