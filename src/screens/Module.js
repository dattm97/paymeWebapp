import React from 'react';
import {SafeAreaView} from 'react-native';
import {LocalBrowser} from '../services/StaticModule/LocalBrowser';

export const Module = ({route}) => {
  const {name} = route?.params ?? {};
  return <LocalBrowser moduleName={name} />;
};
