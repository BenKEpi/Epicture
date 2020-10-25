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
  uploadImage(authorization: {}) {

    const formData = new FormData();
    formData.append('image', authorization.base64);
    formData.append('type', 'base64');
    formData.append('name', 'CLAMOULAGA.png');
    formData.append('title', 'branle');
    formData.append('description', 'blc');
    return fetch('https://api.imgur.com/3/image', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Client-ID ' + env.clientId,
      },
      body: formData
    }).then((responseData) => {
      console.log(responseData);
      return responseData.json()
    }).catch((error) => {
      console.log(error)
      return error
    })
  }
};
