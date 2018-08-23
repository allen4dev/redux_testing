import { combineReducers } from 'redux';

import * as actionTypes from '../actionTypes';
import { INITIAL_STATE } from '../model';

function idReducer(state = INITIAL_STATE.current.id, action) {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return action.payload.id;

    default:
      return state;
  }
}
function tokenReducer(state = INITIAL_STATE.current.token, action) {
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      return action.payload.token;

    default:
      return state;
  }
}
function timelineReducer(state = INITIAL_STATE.current.timeline, action) {
  switch (action.type) {
    case actionTypes.ADD_TWEETS:
      return [...state, ...action.payload.ids];

    default:
      return state;
  }
}
function loadingReducer(state = INITIAL_STATE.current.loading, action) {
  switch (action.type) {
    case actionTypes.REQUEST_TIMELINE:
      return true;

    case actionTypes.ADD_TWEETS:
      return false;

    default:
      return state;
  }
}

const currentReducer = combineReducers({
  id: idReducer,
  token: tokenReducer,
  timeline: timelineReducer,
  loading: loadingReducer,
});

export default currentReducer;
