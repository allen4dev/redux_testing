import { combineReducers } from 'redux';

import currentReducer from './current';
import tweetsReducer from './tweets';

const reducer = combineReducers({
  current: currentReducer,
  tweets: tweetsReducer,
});

export default reducer;
