import React from 'react';
import {LocalBrowser} from '../services/StaticModule/LocalBrowser';

export const Module = ({route}) => {
  const {name, suffix} = route?.params ?? {};
  return <LocalBrowser moduleName={name} suffix={suffix} />;
};
