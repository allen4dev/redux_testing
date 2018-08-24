import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actions from '../actions';
import * as actionTypes from '../actionTypes';
import { INITIAL_STATE } from '../model';

import tweetsModule from 'modules/tweets';

import { instance } from 'utils/api';
import { convertResults } from 'utils/helpers';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('users module async actions', () => {
  beforeEach(function() {
    moxios.install(instance);
  });

  afterEach(function() {
    moxios.uninstall(instance);
  });

  it('should create a SET_TOKEN and SET_CURRENT_USER  action after a successful login', async () => {
    const token = 'xxx-xxx-xxx';
    const user = { id: '1', email: 'allen@example.test', password: 'secret' };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: { data: { id: user.id, token } },
      });
    });

    const expectedActions = [
      {
        type: actionTypes.SET_CURRENT_USER,
        payload: { id: user.id },
      },
      {
        type: actionTypes.SET_TOKEN,
        payload: { token },
      },
    ];

    const store = mockStore(INITIAL_STATE);

    await store.dispatch(actions.login(user.email, user.password));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create a SET_TOKEN and SET_CURRENT_USER  action after a successful registration', async () => {
    const token = 'xxx-xxx-xxx';
    const id = '1';
    const user = {
      username: 'allen',
      email: 'allen@example.test',
      password: 'secret',
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 201,
        response: { data: { id, token } },
      });
    });

    const expectedActions = [
      {
        type: actionTypes.SET_CURRENT_USER,
        payload: { id },
      },
      {
        type: actionTypes.SET_TOKEN,
        payload: { token },
      },
    ];

    const store = mockStore(INITIAL_STATE);

    await store.dispatch(
      actions.register({
        username: user.username,
        email: user.email,
        password: user.password,
      }),
    );

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create a REQUEST_TIMELINE, ADD_TWEETS and tweetsModule.actionTypes.ADD_TWEETS actions after the user fetch his timeline', async () => {
    const token = 'xxx-xxx-xxx';
    const response = {
      data: [
        {
          type: 'tweets',
          id: '1',
          attributes: {
            body: 'Tweet 1',
          },
        },
        {
          type: 'tweets',
          id: '2',
          attributes: {
            body: 'Tweet 2',
          },
        },
      ],
    };

    const converted = convertResults(response);
    const ids = Object.keys(converted);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response,
      });
    });

    const expectedActions = [
      {
        type: actionTypes.REQUEST_TIMELINE,
      },
      {
        type: tweetsModule.actionTypes.ADD_TWEETS,
        payload: { tweets: converted },
      },
      {
        type: actionTypes.ADD_TWEETS,
        payload: { ids },
      },
    ];

    const store = mockStore({
      users: {
        ...INITIAL_STATE,
        current: {
          ...INITIAL_STATE.current,
          token,
        },
      },
    });

    await store.dispatch(actions.fetchTimeline(token));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
