import * as actionTypes from '../actionTypes';
import { INITIAL_STATE } from '../model';

function tweetsReducer(state = INITIAL_STATE.tweets, action) {
  switch (action.type) {
    case actionTypes.ADD_USER_TWEET:
      return [...state, action.payload.id];

    default:
      return state;
  }
}

export default tweetsReducer;
