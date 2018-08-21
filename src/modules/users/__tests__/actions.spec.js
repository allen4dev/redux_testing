import * as actions from '../actions';
import * as actionTypes from '../actionTypes';

describe('user module action creators', () => {
  it('should create an action to set the current user', () => {
    const user = { id: '1', username: 'allen' };

    const expectedAction = {
      type: actionTypes.SET_CURRENT_USER,
      payload: { id: user.id },
    };

    expect(actions.setCurrentUser(user)).toEqual(expectedAction);
  });
});
