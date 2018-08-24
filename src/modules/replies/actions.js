import * as actionTypes from './actionTypes';

import api from 'utils/api';
import { convertResults } from 'utils/helpers';

// action creators
export function addReplies(replies) {
  return {
    type: actionTypes.ADD_REPLIES,
    payload: { replies },
  };
}

// async action creators
export function fetchTweetReplies(tweetId) {
  // ! Constant use of getState, configure axios instance
  // ! to set the token this automatically
  return async dispatch => {
    const { data: results } = await api.tweets.fetchTweetReplies(tweetId);

    const replies = convertResults(results);

    dispatch(addReplies(replies));

    return replies;
  };
}
