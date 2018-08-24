import { combineReducers } from 'redux';

import entitiesReducer from './entities';
import currentReducer from './current';
import tweetsReducer from './tweets';

const reducer = combineReducers({
  entities: entitiesReducer,
  current: currentReducer,
  tweets: tweetsReducer,
});

export default reducer;
