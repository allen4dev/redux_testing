import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import { instance } from 'utils/api';

import usersModule from 'modules/users';

import * as actionTypes from '../actionTypes';
import * as actions from '../actions';
import { INITIAL_STATE } from '../model';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('tweets module async actions', () => {
  beforeEach(function() {
    moxios.install(instance);
  });

  afterEach(function() {
    moxios.uninstall(instance);
  });

  it('should create an ADD_TWEET and a users.actions.ADD_USER_TWEET  actions after a user creates a tweet', async () => {
    const token = 'xxx-xxx-xxx';

    const tweet = {
      id: '1',
      attributes: {
        body: 'Tweet 1',
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 201,
        response: { data: tweet },
      });
    });

    const expectedActions = [
      {
        type: actionTypes.ADD_TWEET,
        payload: { tweet },
      },
      {
        type: usersModule.actionTypes.ADD_USER_TWEET,
        payload: { id: tweet.id },
      },
    ];

    const store = mockStore({
      ...INITIAL_STATE,
      users: { current: { token } },
    });

    await store.dispatch(actions.publishTweet({ body: tweet.attributes.body }));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
