import api from 'utils/api';
import { convertResult } from 'utils/helpers';

import usersModule from 'modules/users';

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

    const tweet = result.data;

    dispatch(addTweet(result.data));
    dispatch(usersModule.actions.addUserTweet(tweet.id));

    // ToDo: Normalize with convertResults
    return convertResult(tweet);
  };
}
