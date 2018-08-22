import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actions from '../actions';
import * as actionTypes from '../actionTypes';
import { INITIAL_STATE } from '../model';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('users module async actions', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('should create a SET_TOKEN and SET_CURRENT_USER  action after a successful login', async () => {
    const token = 'xxx-xxx-xxx';
    const user = { id: '1' };

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

    await store.dispatch(actions.login());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
