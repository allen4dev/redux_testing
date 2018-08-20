import * as actionTypes from './actionTypes';

export function actionCreator() {
  return {
    type: actionTypes.TYPE,
    payload: 'hey',
  };
}
