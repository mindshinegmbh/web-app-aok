import { call, put } from 'redux-saga/effects';
import { apis } from 'network/apis';
import { setSessionData } from '.';

export function* getSession() {
  const {data} = yield call(apis.getSessionRequest, 23);
  yield put(setSessionData(data));
}
