/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {createStore} from 'redux';

const initialState = {
  isLogged: false,
  userInfos: {},
  username: '',
  accountId: '',
};

function reducerLoginInfo(state = initialState, action) {
  switch (action.type) {
    case 'ADD_USERINFOS':
      return {
        ...state,
        userInfos: action.value,
        username: action.value.tokenAdditionalParameters.account_username,
        accountId: action.value.tokenAdditionalParameters.account_id,
        isLogged: true,
      };
    default:
      return state;
  }
}

export default createStore(reducerLoginInfo);
