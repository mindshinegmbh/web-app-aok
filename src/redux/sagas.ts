import { all, fork, takeLatest } from 'redux-saga/effects';
import { callAlert } from './common/saga';

const rootSaga = function* () {
  yield all([takeLatest('counter/increment', callAlert)]);
};

export default rootSaga;
