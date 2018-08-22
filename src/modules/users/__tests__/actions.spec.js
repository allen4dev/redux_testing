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
});
