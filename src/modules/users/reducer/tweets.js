import * as actionTypes from '../actionTypes';
import { INITIAL_STATE } from '../model';
import { combineReducers } from 'redux';

function byIdReducer(state = INITIAL_STATE.tweets.byId, action) {
  switch (action.type) {
    case actionTypes.ADD_USER_TWEET:
      return {
        ...state,
        [action.payload.id]: action.payload.tweet,
      };

    default:
      return state;
  }
}

const tweetsReducer = combineReducers({
  byId: byIdReducer,
});

export default tweetsReducer;
