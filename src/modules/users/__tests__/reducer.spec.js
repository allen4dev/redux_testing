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

  it('should handle REQUEST_TIMELINE action', () => {
    const nextState = reducer(INITIAL_STATE, actions.requestTimeline());

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      current: {
        ...INITIAL_STATE.current,
        loading: true,
      },
    });
  });

  it('should handle ADD_TWEETS action when fetching the timeline', () => {
    const ids = ['1', '2'];

    const nextState = reducer(INITIAL_STATE, actions.addTweets(ids));

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      current: {
        ...INITIAL_STATE.current,
        timeline: ids,
      },
    });

    const newIds = ['3', '4'];
    const newState = reducer(nextState, actions.addTweets(newIds));

    expect(newState).toEqual({
      ...INITIAL_STATE,
      current: {
        ...INITIAL_STATE.current,
        timeline: [...ids, ...newIds],
      },
    });
  });
});
