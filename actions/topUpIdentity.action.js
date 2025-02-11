import initClient from "../utils/initClient.util.js";
import {getIdentity} from "../utils/getIdentity.util.js";

async function topUpIdentityAction(amount) {

  amount = parseInt(amount) || 0;

  if (!amount || typeof amount !== 'number' || amount < 50000) {
    throw new Error('Amount credits for TopUp Identity balance must be specified and greater or equal than 50000');
  }

  const identity = getIdentity();

  const client = initClient();
  const { platform } = client;

  console.log("Make TopUp Identity balance");

  await platform.identities.topUp(identity, amount);

  console.log(`Success!`);

  await client.disconnect();
}

export default topUpIdentityAction;
