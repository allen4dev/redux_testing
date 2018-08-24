import reducer from '../reducer';
import * as actions from '../actions';
import { INITIAL_STATE } from '../model';

import currentReducer from '../reducer/current';
import tweetstReducer from '../reducer/tweets';
import entitiesReducer from '../reducer/entities';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('entities', () => {
  const ENTITIES_STATE = INITIAL_STATE.entities;

  it('should handle ADD_USER action', () => {
    const user = {
      id: '1',
      attributes: { username: 'allen' },
    };

    const nextState = entitiesReducer(ENTITIES_STATE, actions.addUser(user));

    expect(nextState).toEqual({
      ...ENTITIES_STATE,
      [user.id]: { ...user },
    });

    const newUser = {
      id: '2',
      attributes: { username: 'archer' },
    };

    const newState = entitiesReducer(nextState, actions.addUser(newUser));

    expect(newState).toEqual({
      ...nextState,
      [newUser.id]: { ...newUser },
    });
  });

  it('should handle ADD_USERS action', () => {
    const users = {
      '1': {
        id: '1',
        attributes: {
          username: 'allen',
        },
      },
      '2': {
        id: '2',
        attributes: {
          username: 'archer',
        },
      },
    };

    const nextState = entitiesReducer(ENTITIES_STATE, actions.addUsers(users));

    expect(nextState).toEqual({
      ...ENTITIES_STATE,
      ...users,
    });

    const newUsers = {
      '3': {
        id: '3',
        attributes: {
          username: 'yatogami',
        },
      },
      '4': {
        id: '4',
        attributes: {
          username: 'Emiya',
        },
      },
    };

    const newState = entitiesReducer(nextState, actions.addUsers(newUsers));

    expect(newState).toEqual({
      ...nextState,
      ...newUsers,
    });
  });
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

describe('tweets', () => {
  const TWEETS_STATE = INITIAL_STATE.tweets;

  it('should handle ADD_USER_TWEET action', () => {
    const user1 = {
      id: '1',
      tweet: '1',
    };

    const nextState = tweetstReducer(
      TWEETS_STATE,
      actions.addUserTweet(user1.id, user1.tweet),
    );

    expect(nextState).toEqual({
      ...TWEETS_STATE,
      byId: { [user1.id]: user1.tweet },
    });

    const user2 = {
      id: '2',
      tweet: '5',
    };

    const newState = tweetstReducer(
      nextState,
      actions.addUserTweet(user2.id, user2.tweet),
    );

    expect(newState).toEqual({
      ...nextState,
      byId: {
        ...nextState.byId,
        [user2.id]: user2.tweet,
      },
    });
  });
});
