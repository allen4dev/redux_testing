import * as actionTypes from './actionTypes';

// action creators
export function addTweets(tweets) {
  return {
    type: actionTypes.ADD_TWEETS,
    payload: { tweets },
  };
}

export function addTweet(tweet) {
  return {
    type: actionTypes.ADD_TWEET,
    payload: { tweet },
  };
}

export function publishTweet(details) {
  return async dispatch => {
    // ToDo: implementation
    dispatch(addTweet({ id: '1', attributes: { body: details.body } }));
  };
}
