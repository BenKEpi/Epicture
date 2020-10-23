/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 * */

import {Icon, IconElement} from "@ui-kitten/components";
import React from "react";

export const ProfileIcon = (style): IconElement => (
  <Icon {...style} name="person-outline" />
);

export const HomeIcon = (style): IconElement => (
  <Icon {...style} name="monitor-outline" />
);

export const UploadIcon = (style): IconElement => (
  <Icon {...style} name="cloud-upload-outline" />
);

export const SearchIcon = (style): IconElement => (
  <Icon {...style} name="search-outline" />
);

export const OptionIcon = (props): IconElement => (
  <Icon {...props} name="options-outline" />
);

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

export const TrendUp = (props): IconElement => (
  <Icon {...props} name="trending-up-outline" />
);

export const Person = (props): IconElement => (
  <Icon {...props} name="person-outline" />
);

export const StarOut = (props): IconElement => (
  <Icon {...props} name="star-outline" />
);
