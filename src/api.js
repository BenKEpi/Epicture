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
  }
};
