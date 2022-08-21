import {WALLET_ACTIONS} from '../constant/walletAction.constant';
import {encrypt} from '../helper';

export const createOpenWalletURL = ({domain, config}) => {
  const configs = {
    ...config,
    actions: {
      type: WALLET_ACTIONS.OPEN_WALLET,
    },
  };
  const encrypted = encrypt(configs);

  return 'getDataWithAction/' + encodeURIComponent(encrypted);
};
