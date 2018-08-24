import api from 'utils/api';
import { convertResult } from 'utils/helpers';
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
  return async (dispatch, getState) => {
    const { token } = getState().users.current;
    const { data: result } = await api.tweets.publish(details, token);

    dispatch(addTweet(result.data));

    // ToDo: Normalize with convertResults
    return convertResult(result.data);
  };
}
