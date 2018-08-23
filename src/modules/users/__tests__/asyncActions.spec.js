import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actions from '../actions';
import * as actionTypes from '../actionTypes';
import { INITIAL_STATE } from '../model';

import { instance } from 'utils/api';

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

  xit('should create a FETCH_TIMELINE, ADD_TWEETS actions after the user fetch his timeline', async () => {
    // Given we have a valid token to identify us
    const token = 'xxx-xxx-xxx';
    const response = {
      data: {
        type: 'tweets',
        id: '1',
        attributes: {
          body: 'I am making a Twitter redesign',
        },
      },
    };

    // When someone fetchs his timeline
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response,
      });
    });

    // Then we expect an action with type FETCH_TIMELINE and a value of true
    // and other with a type ADD_TWEETS and a value with the fetched tweets
    // to be dispatched
    const expectedActions = [
      {
        type: actionTypes.FETCH_TIMELINE,
        payload: true,
      },
      {
        type: actionTypes.ADD_TWEETS,
        payload: response.data,
      },
    ];

    const store = mockStore(INITIAL_STATE);

    await store.dispatch(actions.fetchTimeline(token));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
