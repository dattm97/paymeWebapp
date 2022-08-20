import Axios, {CancelToken} from 'axios';
import CryptoJS from 'crypto-js';
import ShortId from 'shortid';
import forge from 'node-forge';
import dayjs from 'dayjs';
// import {FULLP, FULLE} from '../../../configs/app.config';
// import {translates} from '../../../translates';
// import {ListConsoleLog} from '../../../components/log/ShowLog';
// import {logoutSubject} from '../../rxjs/rxjs';
forge.options.usePureJavaScript = true;

class MeAPI {
  constructor(
    config = {
      url: '',
      publicKey: '',
      privateKey: '',
      isSecurity: false,
      'x-api-client': '',
    },
  ) {
    this.config = config;
  }

  ResponseDecrypt(
    xAPIAction,
    method,
    xAPIClient,
    xAPIKey,
    xAPIMessage,
    xAPIValidate,
    accessToken,
  ) {
    let encryptKey;
    try {
      // const key = new NodeRSA(this.config.privateKey);
      // encryptKey = key.decrypt(xAPIKey, 'utf8');

      const key = forge.pki.privateKeyFromPem(this.config.privateKey);
      const {util} = forge;

      const encrypted = util.decode64(xAPIKey);

      encryptKey = key.decrypt(encrypted, 'RSA-OAEP');
      // const encrypted = util.decode64(encrypt)
      // const decrypt = privKey.decrypt(encrypted, 'RSA-OAEP')
    } catch (error) {
      throw new Error('Sai xAPIKey');
    }
    const objValidate = {
      'x-api-action': xAPIAction,
      method,
      accessToken,
      'x-api-message': xAPIMessage,
    };

    const md = forge.md.md5.create();
    md.update(Object.values(objValidate ?? {})?.join('') + encryptKey);
    const validate = md.digest().toHex();

    if (validate !== xAPIValidate) {
      throw new Error('Sai xapiValidate');
    }
    let result = null;
    try {
      result = JSON.parse(
        CryptoJS.AES.decrypt(xAPIMessage, encryptKey).toString(
          CryptoJS.enc.Utf8,
        ),
      );
      if (typeof result === 'string') {
        result = JSON.parse(result);
      }
    } catch (error) {
      throw new Error('Sai xapiMessage');
    }
    return result;
  }

  RequestEncrypt(url, method, payload, accessToken) {
    const encryptKey = ShortId.generate();
    const key = forge.pki.publicKeyFromPem(this.config.publicKey);
    const {util} = forge;
    const encrypt = key.encrypt(encryptKey, 'RSA-OAEP');
    const xAPIKey = util.encode64(encrypt);

    let body = '';

    const xApiAction = CryptoJS.AES.encrypt(url, encryptKey).toString();
    let xApiMessage = '';
    if (payload) {
      xApiMessage = CryptoJS.AES.encrypt(
        JSON.stringify(payload),
        encryptKey,
      ).toString();
    }
    const objValidate = {
      xApiAction,
      method,
      accessToken,
      'x-api-message': xApiMessage,
    };
    const md = forge.md.md5.create();
    md.update(Object.values(objValidate ?? {})?.join('') + encryptKey);
    const xAPIValidate = md.digest().toHex();
    body = {
      'x-api-message': xApiMessage,
    };
    const meAPIHeader = {
      'x-api-client': this.config['x-api-client'],
      'x-api-key': xAPIKey,
      'x-api-action': xApiAction,
      'x-api-validate': xAPIValidate,
    };
    if (accessToken !== '') {
      meAPIHeader.Authorization = accessToken;
    }
    return {
      body,
      headers: meAPIHeader,
    };
  }

  async Post(pathUrl, payload, accessToken, headers = {}) {
    try {
      let meAPIHeader = {
        Authorization: accessToken,
      };
      let body = payload;
      let url = this.config.url + pathUrl;

      if (this.config.isSecurity === true) {
        url = this.config.url;
        const encrypt = this.RequestEncrypt(
          pathUrl,
          'POST',
          payload,
          accessToken,
        );
        meAPIHeader = encrypt.headers;
        body = encrypt.body;
      }

      const source = CancelToken.source();
      setTimeout(() => {
        source.cancel();
      }, 30000);
      const response = await Axios.post(url, body, {
        timeout: 30000,
        headers: {...meAPIHeader, ...headers},
        cancelToken: source.token,
      });
      if (response.status === 200) {
        if (this.config.isSecurity === true) {
          try {
            const responseHeaders = response.headers;
            const data = this.ResponseDecrypt(
              responseHeaders['x-api-action'],
              'POST',
              responseHeaders['x-api-client'],
              responseHeaders['x-api-key'],
              response.data['x-api-message'],
              responseHeaders['x-api-validate'],
              accessToken,
            );
            return {
              code: 1,
              data: data || {},
              original: response.data,
            };
          } catch (error) {
            return {
              code: -3,
              data: {message: error.message},
              original: response.data,
            };
          }
        } else {
          return {
            code: 1,
            data: response.data || {},
          };
        }
      } else {
        return {
          // code: response.status,
          // data: response.data || {}
          code: -2,
          data: {
            message: response.data?.message ?? 'error',
          },
        };
      }
    } catch (error) {
      if (error?.response?.data?.code === 401) {
        return {
          code: 1,
          data: {
            errors: [
              {
                // message: error?.response?.data?.message,
                code: 401,
              },
            ],
          },
        };
      }
      if (Axios.isCancel(error)) {
        return {
          code: -2,
          data: {
            message: 'timeout of 30000ms exceeded',
          },
        };
      }
      return {
        code: -2,
        data: {
          message: error.message,
        },
      };
    }
  }
}

export const callApiRSA = async ({
  domain,
  method,
  pathUrl,
  isSecurity,
  lang,
  accessToken,
  publicKey,
  privateKey,
  body,
  appId,
}) => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log(
      '[PAYLOAD]',
      dayjs().format('HH:mm:ss'),
      method.toUpperCase(),
      domain + pathUrl,
      body,
    );
  }

  const meAPI = new MeAPI({
    url: domain,
    publicKey: publicKey,
    privateKey: privateKey,
    isSecurity,
    'x-api-client': appId,
  });

  const headers = {
    Language: lang || 'vi-VN',
  };

  let response;
  if (method.toUpperCase() === 'POST') {
    response = await meAPI.Post(pathUrl, body, accessToken || '', headers);
  }

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log(
      '[REQUEST]',
      dayjs().format('HH:mm:ss'),
      method.toUpperCase(),
      domain + pathUrl,
      body,
      response,
    );
  }

  // ListConsoleLog.addLog({
  //   type: 'REQUEST',
  //   method: method.toUpperCase(),
  //   api: domain + pathUrl,
  //   data: body,
  //   response: response || {},
  // });

  // return handleRestfulResponse(response);
  return handleGraphQLResponse(response);
};

// function handleRestfulResponse(response) {
//   if (response.code === -3) {
//     return {data: {message: translates('C0001Error')}};
//   }
//   if (response.code === 400) {
//     // Error khi thông số truyền lên ko chính xác
//     return {data: {message: translates('C0002Error')}};
//   }
//   if (response.code === -2) {
//     // Error chưa tới SERVER
//     const {message: error} = response.data ?? {};
//     if (error === 'Network Error') {
//       return {data: {message: translates('NetworkMessageError')}};
//     }
//     if (error.includes('timeout of')) {
//       return {data: {message: translates('tookLongTime')}};
//     }
//     if (error === 'Request failed with status code 400') {
//       return {data: {message: translates('C0002Error')}};
//     }
//     return {data: {message: translates('C0002Error')}};
//   }
//   if (response.code === 1) {
//     const {errors, code, data} = response.data;
//     if (errors?.length > 0) {
//       const error = errors[0];
//       if (error.code === 401 || error.extensions?.code === 401) {
//         // logoutSubject.next(true);
//       }
//       return {
//         data: {message: error?.message ?? translates('invalidCredential')},
//       };
//     }

//     if (code) {
//       if (code === 401) {
//         if (
//           data?.message === 'Invalid credentials' ||
//           data?.message === 'Invalid Token' ||
//           data?.message === 'Vui lòng đăng nhập'
//         ) {
//           // logoutSubject.next(true);
//         }
//         return {
//           data: {message: data?.message ?? translates('invalidCredential')},
//         };
//       }
//       if (data?.code === 500) {
//         return {data: {message: data?.message ?? translates('C0003Error')}};
//       }
//       if (data?.code === 400) {
//         return {data: {message: translates('C0002Error')}};
//       }
//     }

//     return response;
//   }
// }

// function handleResponse(response) {
//   if (response.code === 1) {
//     if (!isNaN(parseInt(response.data, 10))) {
//       return {
//         code: parseInt(response.data, 10),
//         data: {
//           message: `${translates('cannotConnect')} ${response.data} )`,
//         },
//       };
//     }

//     if (response.data?.code === 400) {
//       return {
//         code: response.data.code,
//         data: {
//           ...response.data.data,
//           message: translates('invalidParams'),
//         },
//       };
//     }
//     return {
//       code: response.data.code,
//       data: response.data.data,
//     };
//   }

//   if (response.code === -2) {
//     if (response.data.message === 'Network Error') {
//       return {
//         code: -1,
//         data: {
//           message: translates('NetworkMessageError'),
//         },
//       };
//     }
//     if (
//       response.data.message === 'timeout of 30000ms exceeded' ||
//       response.data.message === 'timeout of 60000ms exceeded'
//     ) {
//       return {
//         code: -3,
//         data: {
//           message: translates('tookLongTime'),
//         },
//       };
//     }
//     if (response?.original?.response?.status) {
//       return {
//         code: response.code,
//         data: {
//           message: `${translates('cannotConnect')} ${
//             response.original.response.status
//           } )`,
//         },
//       };
//     }
//   }
//   return response;
// }

function handleGraphQLResponse(response) {
  if (response.code === -3) {
    // Không decrypt được data từ SERVER
    // toastApp.next({message: translates('C0001Error')});
  } else if (response.code === 400) {
    // Error khi thông số truyền lên ko chính xác
    // toastApp.next({message: translates('C0002Error')});
  } else if (response.code === -2) {
    // Error chưa tới SERVER
    /* -- */
    const {errors} = response.data;
    const error = errors[0]?.message ?? '';
    if (error === 'Network Error') {
      // toastApp.next({message: translates('NetworkMessageError')});
      // networkSubject.next(false)
    } else if (
      error === 'timeout of 30000ms exceeded' ||
      error === 'timeout of 60000ms exceeded'
    ) {
      // toastApp.next({message: translates('tookLongTime')});
    } else if (error === 'Request failed with status code 400') {
      // toastApp.next({message: translates('C0002Error')});
    } else {
      // toastApp.next({message: translates('C0002Error')});
    }
    /* -- */
  } else if (response.code === 1) {
    const {errors, code, data} = response.data;
    if (errors && errors?.length > 0) {
      const error = errors[0];
      if (error.code === 401 || error.extensions?.code === 401) {
        // logoutSubject.next(true);
      }
      // toastApp.next({
      //   message: error?.message ?? translates('invalidCredential'),
      // });
    } else if (code) {
      if (code === 401) {
        if (
          data?.message === 'Invalid credentials' ||
          data?.message === 'Invalid Token' ||
          data?.message === 'Vui lòng đăng nhập'
        ) {
          // store.dispatch({ type: LOGOUT, isShowLoading: false })
        }
        // toastApp.next({
        //   message: data?.message ?? translates('invalidCredential'),
        // });
      } else if (data?.code === 500) {
        // toastApp.next({message: data?.message ?? translates('C0003Error')});
      } else if (data?.code === 400) {
        // console.log('====lỗi ')
        // toastApp.next({message: translates('C0002Error')});
      }
    }
  }
  return response;
}

// export const responseGrapQLDecrypt = (xAPIKey, xAPIMessage, xAPIValidate) => {
//   let encryptKey
//   const { env } = storeApp
//
//   const app = {
//     publicKey:
//       '-----BEGIN PUBLIC KEY-----\n' +
//       'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKWcehEELB4GdQ4cTLLQroLqnD3AhdKi\n' +
//       'wIhTJpAi1XnbfOSrW/Ebw6h1485GOAvuG/OwB+ScsfPJBoNJeNFU6J0CAwEAAQ==\n' +
//       '-----END PUBLIC KEY-----',
//     privateKey:
//       '-----BEGIN RSA PRIVATE KEY-----\n' +
//       'MIIBPAIBAAJBAKWcehEELB4GdQ4cTLLQroLqnD3AhdKiwIhTJpAi1XnbfOSrW/Eb\n' +
//       'w6h1485GOAvuG/OwB+ScsfPJBoNJeNFU6J0CAwEAAQJBAJSfTrSCqAzyAo59Ox+m\n' +
//       'Q1ZdsYWBhxc2084DwTHM8QN/TZiyF4fbVYtjvyhG8ydJ37CiG7d9FY1smvNG3iDC\n' +
//       'dwECIQDygv2UOuR1ifLTDo4YxOs2cK3+dAUy6s54mSuGwUeo4QIhAK7SiYDyGwGo\n' +
//       'CwqjOdgOsQkJTGoUkDs8MST0MtmPAAs9AiEAjLT1/nBhJ9V/X3f9eF+g/bhJK+8T\n' +
//       'KSTV4WE1wP0Z3+ECIA9E3DWi77DpWG2JbBfu0I+VfFMXkLFbxH8RxQ8zajGRAiEA\n' +
//       '8Ly1xJ7UW3up25h9aa9SILBpGqWtJlNQgfVKBoabzsU=\n' +
//       '-----END RSA PRIVATE KEY-----',
//   }
//
//   try {
//     const privateKey = env === 'production' ? FULLP : app.privateKey
//     const key = forge.pki.privateKeyFromPem(privateKey)
//
//     const { util } = forge
//
//     const encrypted = util.decode64(xAPIKey)
//
//     encryptKey = key.decrypt(encrypted, 'RSA-OAEP')
//   } catch (err) {
//     // console.log('error', error)
//     throw new Error('Thông tin "x-api-key" không chính xác')
//   }
//
//   const objValidate = {
//     accessToken: storeApp.accessToken,
//     'x-api-message': xAPIMessage,
//   }
//
//   const md = forge.md.md5.create()
//   md.update(values(objValidate).join('') + encryptKey)
//   const validate = md.digest().toHex()
//
//   if (validate !== xAPIValidate) {
//     throw new Error('Thông tin "x-api-validate" không chính xác')
//   }
//   let result = null
//   try {
//     result = JSON.parse(CryptoJS.AES.decrypt(xAPIMessage, encryptKey).toString(CryptoJS.enc.Utf8))
//   } catch (error) {
//     throw new Error('Thông tin "x-api-message" không chính xác')
//   }
//   return result
// }
