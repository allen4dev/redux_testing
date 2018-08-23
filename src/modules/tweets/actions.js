import * as actionTypes from './actionTypes';

// action creators
export function addTweets(tweets) {
  return {
    type: actionTypes.ADD_TWEETS,
    payload: { tweets },
  };
}
