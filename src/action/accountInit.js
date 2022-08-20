import {callGraphql, handleResponse} from '../api';
import {SQL_ACCOUNT_INIT} from '../config/graphql.config';

export const accountInit = async params => {
  const initInput = {
    appToken: params?.appToken,
    connectToken: params.connectToken,
    clientId: params.clientId,
  };
  const response = await callGraphql(
    SQL_ACCOUNT_INIT,
    {
      initInput,
    },
    {
      accessToken: '',
    },
  );

  console.log('===response', response);

  return handleResponse(response);
};
