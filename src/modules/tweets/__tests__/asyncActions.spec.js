import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actionTypes from '../actionTypes';
import * as actions from '../actions';
import { INITIAL_STATE } from '../model';

import { instance } from 'utils/api';
import { convertResults } from 'utils/helpers';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('tweets module async actions', () => {
  beforeEach(function() {
    moxios.install(instance);
  });

  afterEach(function() {
    moxios.uninstall(instance);
  });

  it('hey', () => {
    expect(true).toBeTruthy();
  });
});
