import { combineReducers } from 'redux';

import * as actionTypes from '../actionTypes';
import { INITIAL_STATE } from '../model';

function entitiesReducer(state = INITIAL_STATE.entities, action) {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return {
        ...state,
        [action.payload.user.id]: {
          ...action.payload.user,
        },
      };

    default:
      return state;
  }
}

export default entitiesReducer;
