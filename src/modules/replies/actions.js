import * as actionTypes from './actionTypes';

// action creators
export function addReplies(replies) {
  return {
    type: actionTypes.ADD_REPLIES,
    payload: { replies },
  };
}

// async action creators
