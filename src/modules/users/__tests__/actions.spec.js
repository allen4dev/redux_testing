import * as actions from '../actions';
import * as actionTypes from '../actionTypes';

describe('user module action creators', () => {
  it('should create an action to set the current user', () => {
    const id = '1';

    const expectedAction = {
      type: actionTypes.SET_CURRENT_USER,
      payload: { id },
    };

    expect(actions.setCurrentUser(id)).toEqual(expectedAction);
  });

  it('should create an action to set the token', () => {
    const token = 'xxx-xxx-xxx';

    const expectedAction = {
      type: actionTypes.SET_TOKEN,
      payload: { token },
    };

    expect(actions.setToken(token)).toEqual(expectedAction);
  });

  it('should create an action to change the state of the loading in the user timeline', () => {
    const value = true;

    const expectedAction = {
      type: actionTypes.REQUEST_TIMELINE,
      payload: value,
    };

    expect(actions.requestTimeline(value)).toEqual(expectedAction);
  });
});
