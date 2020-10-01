/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import {StyleSheet, View, Text, Button} from 'react-native';

export default class GalleryView extends Component {
    render() {
        return (
            <View>
                <Text style={styles.mainText}>Welcome to Gallery View !</Text>
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
});
