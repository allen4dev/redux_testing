import reducer from '../reducer';
import * as actions from '../actions';
import { INITIAL_STATE } from '../model';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('should', () => {
  it('pass', () => {
    expect(true).toBeTruthy();
  });
});
