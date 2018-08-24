import * as actionTypes from '../actionTypes';
import { INITIAL_STATE } from '../model';

function entitiesReducer(state = INITIAL_STATE.entities, action) {
  switch (action.type) {
    case actionTypes.ADD_TWEETS:
      return {
        ...state,
        ...action.payload.tweets,
      };

    case actionTypes.ADD_TWEET:
      return {
        ...state,
        [action.payload.tweet.id]: { ...action.payload.tweet },
      };

    default:
      return state;
  }
}

export default entitiesReducer;
