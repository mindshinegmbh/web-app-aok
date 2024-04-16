import { put } from 'redux-saga/effects';

//export const delay = (ms: any) => new Promise((res) => setTimeout(res, ms));

export function* callAlert() {
  //yield alert('hello');
}

export function* incrementAsync() {
  // use the call Effect
 // yield call(delay, 1000);
  yield put({ type: 'INCREMENT' });
}
