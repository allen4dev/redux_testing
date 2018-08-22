import reducer from '../reducer';
import * as actions from '../actions';
import { INITIAL_STATE } from '../model';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('current', () => {
  it('should handle SET_CURRENT_USER action', () => {
    // Given we have a empty state
    const id = '1';

    // When we dispatch a SET_CURRENT_USER action with a '1' id
    const nextState = reducer(INITIAL_STATE, actions.setCurrentUser(id));

    // Then the new state should contain a current key
    expect(nextState).toEqual({
      ...INITIAL_STATE,
      current: {
        ...INITIAL_STATE.current,
        id,
      },
    });
  });
});
