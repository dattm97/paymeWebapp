import {WALLET_ACTIONS} from '../constant/walletAction.constant';
import {encrypt} from '../helper';

export const createOpenWalletURL = async ({domain, config}) => {
  const configs = {
    ...config,
    actions: {
      type: WALLET_ACTIONS.OPEN_WALLET,
    },
  };
  const encrypted = await encrypt(configs);

  return 'getDataWithAction/' + encodeURIComponent(encrypted);
};
