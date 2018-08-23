import reducer from '../reducer';
import * as actions from '../actions';
import { INITIAL_STATE } from '../model';

import entitiesReducer from '../reducer/entities';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('entities', () => {
  const ENTITIES_STATE = INITIAL_STATE.entities;

  it('should handle ADD_TWEETS action', () => {
    const tweets = {
      '1': { attributes: { body: 'Tweet 1' } },
      '2': { attributes: { body: 'Tweet 2' } },
    };

    const nextState = entitiesReducer(
      ENTITIES_STATE,
      actions.addTweets(tweets),
    );

    expect(nextState).toEqual({
      ...ENTITIES_STATE,
      ...tweets,
    });

    const newTweets = {
      '3': { attributes: { body: 'Tweet 3' } },
      '4': { attributes: { body: 'Tweet 4' } },
    };

    const newState = entitiesReducer(nextState, actions.addTweets(newTweets));

    expect(newState).toEqual({
      ...ENTITIES_STATE,
      ...tweets,
      ...newTweets,
    });
  });
});
