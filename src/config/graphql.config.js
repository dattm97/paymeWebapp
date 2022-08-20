export const SQL_CLIENT_REGISTER = `
mutation ClientRegister ($clientRegisterInput: ClientRegisterInput!){
    Client {
    Register(input: $clientRegisterInput) {
      succeeded
      message
      clientId
    }
  }
}`;

export const SQL_ACCOUNT_INIT = `mutation AccountInitMutation($initInput: CheckInitInput) {
  OpenEWallet {
    Init(input: $initInput) {
      succeeded
      message
      handShake
      accessToken
      updateToken
      kyc {
        kycId
        state
        reason
      }
      phone
      appEnv
      storeName
      storeImage
      fullnameKyc
    }
  }
}`;
