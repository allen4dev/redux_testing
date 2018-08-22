import reducer from '../reducer';
import * as actions from '../actions';
import { INITIAL_STATE } from '../model';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('current', () => {
  it('should handle SET_CURRENT_USER action', () => {
    const id = '1';

    const nextState = reducer(INITIAL_STATE, actions.setCurrentUser(id));

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      current: {
        ...INITIAL_STATE.current,
        id,
      },
    });
  });

  it('should handle SET_TOKEN action', () => {
    const token = 'xxx-xxx-xxx';

    const nextState = reducer(INITIAL_STATE, actions.setToken(token));

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      current: {
        ...INITIAL_STATE.current,
        token,
      },
    });
  });
});
