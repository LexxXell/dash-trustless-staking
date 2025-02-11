import CommandWithTrace from '../classes/CommandWithTrace.class.js';
import topUpIdentityAction from "../actions/topUpIdentity.action.js";

class TopUpIdentity extends CommandWithTrace {
  constructor(name) {
    super(name);
    this.description("Make TopUp Identity balance")
      .argument('<amount>', 'Amount credits for TopUp Identity balance')
      .action(topUpIdentityAction);
  }
}

export default TopUpIdentity;
