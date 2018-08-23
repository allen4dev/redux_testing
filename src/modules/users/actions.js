import * as actionTypes from './actionTypes';

import tweetsModule from 'modules/tweets';

import api from 'utils/api';
import { convertResults } from 'utils/helpers';

// Action creators
export function setCurrentUser(id) {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: { id },
  };
}

export function setToken(token) {
  return {
    type: actionTypes.SET_TOKEN,
    payload: { token },
  };
}

export function requestTimeline() {
  return {
    type: actionTypes.REQUEST_TIMELINE,
  };
}

export function addTweets(ids) {
  return {
    type: actionTypes.ADD_TWEETS,
    payload: { ids },
  };
}

// Async action creators
export function login(email, password) {
  return async dispatch => {
    const { data: results } = await api.auth.login({ email, password });

    dispatch(setCurrentUser(results.data.id));
    dispatch(setToken(results.data.token));

    return results.data.token;
  };
}

export function register(information) {
  return async dispatch => {
    const { data: results } = await api.auth.register(information);

    dispatch(setCurrentUser(results.data.id));
    dispatch(setToken(results.data.token));

    return results.data.token;
  };
}

export function fetchTimeline() {
  return async (dispatch, getState) => {
    dispatch(requestTimeline());

    const { token } = getState().users.current;

    const { data: results } = await api.tweets.fetchTimeline(token);

    const tweets = convertResults(results);
    const ids = Object.keys(tweets);

    dispatch(addTweets(ids));
    dispatch(tweetsModule.actions.addTweets(tweets));

    return tweets;
  };
}
