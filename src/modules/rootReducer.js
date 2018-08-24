import { combineReducers } from 'redux';

import users from './users';
import replies from './replies';
import tweets from './tweets';

const rootReducer = combineReducers({
  [users.constants.NAME]: users.reducer,
  [tweets.constants.NAME]: tweets.reducer,
  [replies.constants.NAME]: replies.reducer,
});

export default rootReducer;
