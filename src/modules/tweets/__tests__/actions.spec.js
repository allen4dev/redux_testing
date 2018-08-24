import * as actions from '../actions';
import * as actionTypes from '../actionTypes';

describe('tweets module action creators', () => {
  it('should create an action to add tweets', () => {
    const tweets = {
      '1': {
        body: 'Tweet 1',
      },
      '2': {
        body: 'Tweet 2',
      },
    };

    const expectedAction = {
      type: actionTypes.ADD_TWEETS,
      payload: { tweets },
    };

    expect(actions.addTweets(tweets)).toEqual(expectedAction);
  });

  it('should create an action to add a tweet', () => {
    const tweet = {
      id: '1',
      attributes: {
        body: 'Tweet 1',
      },
    };

    const expectedAction = {
      type: actionTypes.ADD_TWEET,
      payload: { tweet },
    };

    expect(actions.addTweet(tweet)).toEqual(expectedAction);
  });
});
