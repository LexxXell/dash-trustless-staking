import CommandWithTrace from '../classes/CommandWithTrace.class.js';
import createPoolAction from '../actions/createPool.action.js'

class CreatePool extends CommandWithTrace {
  constructor(name) {
    super(name);
    this.description("Run a test")
      .action(createPoolAction);
  }
}

export default CreatePool;
