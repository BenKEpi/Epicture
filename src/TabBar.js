/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  BottomNavigation,
  BottomNavigationTab,
} from '@ui-kitten/components';

export const HomeTabBar = (props) => {
  const onSelect = (index: number): void => {
    const selectedTabRoute: string = props.state.routeNames[index];
    props.navigation.navigate(selectedTabRoute);
  };

  const createNavigationTabForRoute = (route) => {
    const {options} = props.descriptors[route.key];
    return (
        <BottomNavigationTab
          key={route.key}
          title={options.title}
          icon={options.tabBarIcon}
        />
    );
  };

  return (
      <BottomNavigation
        appearance="noIndicator"
        selectedIndex={props.state.index}
        onSelect={onSelect}>
        {props.state.routes.map(createNavigationTabForRoute)}
      </BottomNavigation>
  );
};
