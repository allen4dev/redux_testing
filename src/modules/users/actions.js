import * as actionTypes from './actionTypes';

export function setCurrentUser(user) {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: { id: user.id },
  };
}
