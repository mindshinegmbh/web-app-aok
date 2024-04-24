import { call } from 'redux-saga/effects';
import { apis } from 'network/apis';

export function* getSession() {
  const {data} = yield call(apis.getSessionRequest, 23);
  console.log(data)
  yield put(setSessionData(data));
}
