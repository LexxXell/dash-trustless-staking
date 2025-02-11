import Dash from 'dash';

import {getMnemonic} from "./getMnemonic.util.js";
import {validateEnvVars} from "./validateEnvVars.util.js";
import storage from "./storage.util.js";


const createClientConfig = (mnemonic) => {
  return () => {
    if (!mnemonic) {
      throw new Error("Mnemonic not set as argument");
    }

    validateEnvVars(['CONTRACT_ID']);

    const options = {
      network: "testnet",
      wallet: {
        mnemonic,
        adapter: storage,
      },
      apps: {
        TrustlessPoolStaking: {
          contractId: process.env.CONTRACT_ID,
        }
      }
    };

    if (process.env.SKIP_SYNCHRONIZATION_BEFORE_HEIGHT) {
      options.wallet.unsafeOptions = {
        skipSynchronizationBeforeHeight: Number(process.env.SKIP_SYNCHRONIZATION_BEFORE_HEIGHT),
      };
    }

    return options;
  };
};

function initClient() {

  const mnemonic = getMnemonic();

  const clientConfig = createClientConfig(mnemonic);

  return new Dash.Client(clientConfig());
}

export default initClient;
