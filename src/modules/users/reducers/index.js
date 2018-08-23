import { combineReducers } from 'redux';

import currentReducer from './current';

const reducer = combineReducers({
  current: currentReducer,
});

export default reducer;
