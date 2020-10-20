import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Provider } from 'react-redux';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as eva from '@eva-design/eva';

import store from "./src/store/store";
import RootComponents from "./src/components/root";

export default function App() {
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.dark}>
        <IconRegistry icons={EvaIconsPack} />
        <SafeAreaProvider>
          <RootComponents />
        </SafeAreaProvider>
      </ApplicationProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
