/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {SearchBar} from "react-native-elements";
import {View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {List, Text} from "@ui-kitten/components";
import Api from "../../api";
import CardImageComponent from "../card/card";

export default class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      search: '',
      isLoading: true,
    }
  };

  getSearch(search) {
    Api.get('gallery/search/?q=' + search)
      .then((responseData) => {
        this.setState({data: responseData, isLoading: false});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateSearch = (text) => {
    this.setState({search: text});
  }

  renderItem = ({item}) => {
    return <CardImageComponent elem={item} />;
  };

  render() {
    const {search} = this.state

    if (this.state.isLoading) {
      return (
        <SafeAreaView>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
            onSubmitEditing={(event) => this.getSearch(event.nativeEvent.text)}
          />
          <View>
            <Text>Boum !</Text>
          </View>
      </SafeAreaView>
      )
    } else {
      return(
        <SafeAreaView>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={this.state.search}
            onSubmitEditing={(event) => this.getSearch(event.nativeEvent.text)}
          />
          <View>
            <List
              data={this.state.data.data}
              renderItem={this.renderItem}
            />
          </View>
        </SafeAreaView>
      )
    }
  }
}
