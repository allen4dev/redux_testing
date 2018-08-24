import * as actions from '../actions';
import * as actionTypes from '../actionTypes';

describe('replies module action creators', () => {
  it('should create an action to add a list of replies', () => {
    const replies = {
      '1': { body: 'Reply 1' },
      '2': { body: 'Reply 2' },
    };

    const expectedAction = {
      type: actionTypes.ADD_REPLIES,
      payload: { replies },
    };

    expect(actions.addReplies(replies)).toEqual(expectedAction);
  });
});
