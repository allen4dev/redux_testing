import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import { instance } from 'utils/api';

import * as actionTypes from '../actionTypes';
import * as actions from '../actions';
import { INITIAL_STATE } from '../model';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('replies module async actions', () => {
  beforeEach(function() {
    moxios.install(instance);
  });

  afterEach(function() {
    moxios.uninstall(instance);
  });

  it('should pass', async () => {
    const token = 'xxx-xxx-xxx';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: { data: 'hey' },
      });
    });

    const store = mockStore({
      ...INITIAL_STATE,
      users: { current: { token } },
    });
  });
});
