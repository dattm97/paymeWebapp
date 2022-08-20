import {getDomainAPI, getSecure} from '../helper';
import {callApiRSA} from './requestRSA';

export const handleResponse = response => {
  if (!response.data?.errors) {
    return {status: true, response: response?.data?.data ?? {}};
  } else {
    return {status: false, response: response?.data?.errors ?? {}};
  }
};

export async function callGraphql(
  sql,
  variables,
  keys = {
    accessToken: '',
  },
) {
  const response = await callApiRSA({
    domain: getDomainAPI('sandbox'),
    method: 'POST',
    pathUrl: '/graphql',
    accessToken: keys.accessToken ?? '',
    body: {
      query: `${sql}`,
      variables: variables || null,
    },
    isSecurity: getSecure('sandbox'),
    publicKey: `-----BEGIN PUBLIC KEY-----
    MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAId28RoBckMTTPqVCC3c1f+fH+BbdVvv
    wDkSf+0zmaUlCFyQpassU3+8CvM6QbeYSYGWp1YIwGqg2wTF94zT4eECAwEAAQ==
    -----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
    MIIBOwIBAAJBAMEKxNcErAKSzmWcps6HVScLctpdDkBiygA3Pif9rk8BoSU0BYAs
    G5pW8yRmhCwVMRQq+VhJNZq+MejueSBICz8CAwEAAQJBALfa29K1/mWNEMqyQiSd
    vDotqzvSOQqVjDJcavSHpgZTrQM+YzWwMKAHXLABYCY4K0t01AjXPPMYBueJtFeA
    i3ECIQDpb6Fp0yGgulR9LHVcrmEQ4ZTADLEASg+0bxVjv9vkWwIhANOzlw9zDMRr
    i/5bwttz/YBgY/nMj7YIEy/v4htmllntAiA5jLDRoyCOPIGp3nUMpVz+yW5froFQ
    nfGjPSOb1OgEMwIhAI4FhyvoJQKIm8wyRxDuSXycLbXhU+/sjuKz7V4wfmEpAiBb
    PmELTX6BquyCs9jUzoPxDWKQSQGvVUwcWXtpnYxSvQ==
    -----END RSA PRIVATE KEY-----`,
    appId: '95',
  });
  return response;
}
