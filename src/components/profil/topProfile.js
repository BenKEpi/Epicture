/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, {Component} from "react";
import {Image, StyleSheet, View} from "react-native";
import {Avatar, Text} from "@ui-kitten/components";
import Api from "../../api"
import {connect} from "react-redux";

class ProfilTopBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true
    }
  }

  componentDidMount() {
    Api.get('account/' + this.props.username)
      .then((responseData) => {
        this.setState({
          data: responseData.data,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error)
      });
  }


  render() {
    return (
     <View>
       <Image source={{uri: this.state.data.cover}} style={styles.coverImage} />
       <View style={styles.titleCover}>
         <Avatar source={{uri: this.state.data.avatar}} size='giant'/>
         <View style={styles.titleText}>
           <Text style={styles.userText}>{this.state.data.url}</Text>
           <Text style={styles.rankText}>{this.state.data.reputation} {this.state.data.reputation_name}</Text>
         </View>
       </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  spinner: {
    marginTop: '50%',
    alignItems: 'center',
  },
  userText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  rankText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  titleCover: {
    flexDirection: 'row',
    margin: 10,
    top: 110,
    position: 'absolute',
  },
  titleText: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  coverImage: {
    height: 200,
    zIndex: 0,
  },
  test: {
    minHeight: '100%',
  }
});

const mapStateToProps = (state) => {
  return {
    userInfos: state.userInfos,
    username: state.username,
    accountId: state.accountId,
  };
};

export default connect(mapStateToProps)(ProfilTopBarComponent);
