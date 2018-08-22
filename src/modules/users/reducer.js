import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';
import { INITIAL_STATE } from './model';

function currentReducer(state = INITIAL_STATE.current, action) {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        id: action.payload.id,
      };

    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };

    default:
      return state;
  }
}

const reducer = combineReducers({
  current: currentReducer,
});

export default reducer;
