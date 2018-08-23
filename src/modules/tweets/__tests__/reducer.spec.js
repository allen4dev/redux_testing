import reducer from '../reducer';
import * as actions from '../actions';
import { INITIAL_STATE } from '../model';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('entities', () => {
  it('should handle ADD_TWEETS action', () => {
    const tweets = {
      '1': { attributes: { body: 'Tweet 1' } },
      '2': { attributes: { body: 'Tweet 2' } },
    };

    const nextState = reducer(INITIAL_STATE, actions.addTweets(tweets));

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      entities: tweets,
    });

    const newTweets = {
      '3': { attributes: { body: 'Tweet 3' } },
      '4': { attributes: { body: 'Tweet 4' } },
    };

    const newState = reducer(nextState, actions.addTweets(newTweets));

    expect(newState).toEqual({
      ...INITIAL_STATE,
      entities: {
        ...tweets,
        ...newTweets,
      },
    });
  });
});
