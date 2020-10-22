/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 * */

import {Icon, IconElement} from "@ui-kitten/components";
import React from "react";

export const IconFavorited = (props): IconElement => (
  <Icon {...props} name="heart" />
);

export const IconUnfavorited = (props): IconElement => (
  <Icon {...props} name="heart-outline" />
);

export const IconUpsOut = (props): IconElement => (
  <Icon {...props} name="arrow-circle-up-outline" />
);

export const IconUps = (props): IconElement => (
  <Icon {...props} name="arrow-circle-up" />
);

export const IconDownOut = (props): IconElement => (
  <Icon {...props} name="arrow-circle-down-outline" />
);

export const IconDown = (props): IconElement => (
  <Icon {...props} name="arrow-circle-down" />
);
