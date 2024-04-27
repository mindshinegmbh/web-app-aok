import { all, takeLatest } from 'redux-saga/effects';
import { getSession } from './session/saga';

const rootSaga = function* () {
  yield all([takeLatest('session/getSessionData', getSession)]);
};

export default rootSaga;
