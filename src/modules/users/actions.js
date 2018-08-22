import * as actionTypes from './actionTypes';

import api from 'utils/api';

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
    const { data: results } = await api.auth.login(information);

    dispatch(setCurrentUser(results.data.id));
    dispatch(setToken(results.data.token));

    return results.data.token;
  };
}
