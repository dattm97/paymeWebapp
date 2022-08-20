import cryptoJs from 'crypto-js';
import forge from 'node-forge';
import {
  GRAPHQL_DEV,
  GRAPHQL_PRODUCTION,
  GRAPHQL_SANBOX,
  GRAPHQL_STAGING,
} from '../config/api.config';

export const encrypt = text => {
  const encrypted = cryptoJs.AES.encrypt(
    JSON.stringify(text),
    'CMo359Lqx16QYi3x',
  ).toString();

  return encrypted;
};

export const decrypt = text => {
  // const encrypted = cryptoJs.AES.encrypt(
  //   JSON.stringify(text),
  //   'b5d8cf6c30d9cb4a861036bdde44c137',
  // ).toString();

  // return encrypted;
  const decrypted = cryptoJs.AES.decrypt(text, 'CMo359Lqx16QYi3x').toString(
    cryptoJs.enc.Utf8,
  );

  return decrypted;
};

export const encryptConnectToken = (text, secretKey) => {
  const ivbyte = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const cipher = forge.cipher.createCipher('AES-CBC', secretKey);
  cipher.start({iv: ivbyte});
  cipher.update(forge.util.createBuffer(text, 'utf8'));
  cipher.finish();
  return forge.util.encode64(cipher.output.getBytes());
};

export const getDomainAPI = env => {
  switch (env) {
    case 'dev':
      return GRAPHQL_DEV;
    case 'sandbox':
      return GRAPHQL_SANBOX;
    case 'staging':
      return GRAPHQL_STAGING;
    default:
      return GRAPHQL_PRODUCTION;
  }
};

export const getSecure = env => {
  switch (env) {
    case 'dev':
      return false;
    case 'sandbox':
      return true;
    case 'staging':
      return true;
    case 'production':
      return true;
    default:
      return true;
  }
};
