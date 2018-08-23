import reducer from '../reducer';
import * as actions from '../actions';
import { INITIAL_STATE } from '../model';

import currentReducer from '../reducer/current';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('current', () => {
  const CURRENT_STATE = INITIAL_STATE.current;

  it('should handle SET_CURRENT_USER action', () => {
    const id = '1';

    const nextState = currentReducer(CURRENT_STATE, actions.setCurrentUser(id));

    expect(nextState).toEqual({
      ...CURRENT_STATE,
      id,
    });
  });

  it('should handle SET_TOKEN action', () => {
    const token = 'xxx-xxx-xxx';

    const nextState = currentReducer(CURRENT_STATE, actions.setToken(token));

    expect(nextState).toEqual({
      ...CURRENT_STATE,
      token,
    });
  });

  it('should handle REQUEST_TIMELINE action', () => {
    const nextState = currentReducer(CURRENT_STATE, actions.requestTimeline());

    expect(nextState).toEqual({
      ...CURRENT_STATE,
      loading: true,
    });
  });

  it('should handle ADD_TWEETS action when fetching the timeline', () => {
    const ids = ['1', '2'];

    const nextState = currentReducer(CURRENT_STATE, actions.addTweets(ids));

    expect(nextState).toEqual({
      ...CURRENT_STATE,
      timeline: ids,
    });

    const newIds = ['3', '4'];
    const newState = currentReducer(nextState, actions.addTweets(newIds));

    expect(newState).toEqual({
      ...CURRENT_STATE,
      timeline: [...ids, ...newIds],
    });
  });

  it('should also change the loading state to false after a successful ADD_TWEETS action', () => {
    const ids = ['1', '2'];

    const nextState = currentReducer(
      { ...CURRENT_STATE, loading: true },
      actions.addTweets(ids),
    );

    expect(nextState).toEqual({
      ...CURRENT_STATE,
      timeline: ids,
      loading: false,
    });
  });
});
