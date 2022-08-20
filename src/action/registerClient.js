import {Platform} from 'react-native';
import {getUniqueId} from 'react-native-device-info';
import {callGraphql, handleResponse} from '../api';
import {SQL_CLIENT_REGISTER} from '../config/graphql.config';

export const registerClient = async () => {
  const clientRegisterInput = {
    platform: Platform.OS === 'ios' ? 'IOS_SDK' : 'ANDROID_SDK',
    deviceId: getUniqueId(),
    channel: 'channel',
    version: '1.0.0',
    isRoot: false,
  };
  const response = await callGraphql(
    SQL_CLIENT_REGISTER,
    {
      clientRegisterInput,
    },
    {
      accessToken: '',
    },
  );

  console.log('===response', response);

  return handleResponse(response);
};
