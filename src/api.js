/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import env from '../env.json';

module.exports = {
  get(url) {
    return fetch(env.baseURL + url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Client-ID ' + env.clientId,
      },
    }).then((result) => {
      return result.json();
    });
  },
  post(url, accessToken) {
    return fetch(env.baseURL + url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken,
      },
    }).then((result) => {
      return result.json();
    });
  },
  uploadImage(authorization: {}, accessToken) {
    return fetch('https://api.imgur.com/3/image', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken,
      },
      body: JSON.stringify({
        'image': authorization.base64,
        'type': 'base64',
        'name': 'CLAMOULAGA.png',
        'title': 'branle',
        'description': 'blc',
      })
    }).then((responseData) => {
      console.log(responseData);
      return responseData.json()
    }).catch((error) => {
      console.log(error)
      return error
    })
  }
};
