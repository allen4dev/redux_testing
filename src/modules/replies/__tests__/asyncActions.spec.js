import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import { instance } from 'utils/api';
import { convertResults } from 'utils/helpers';

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

  it('should create an ADD_REPLIES action after visit a tweet', async () => {
    const response = {
      data: [
        {
          type: 'replies',
          id: '1',
          attributes: {
            body: 'Reply 1',
          },
        },
        {
          type: 'replies',
          id: '2',
          attributes: {
            body: 'Reply 2',
          },
        },
      ],
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response,
      });
    });

    const store = mockStore({
      ...INITIAL_STATE,
    });

    const tweetId = '1';

    const expectedActions = [
      {
        type: actionTypes.ADD_REPLIES,
        payload: { replies: convertResults(response) },
      },
    ];

    await store.dispatch(actions.fetchTweetReplies(tweetId));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
