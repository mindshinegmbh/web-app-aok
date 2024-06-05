import { all, takeLatest } from 'redux-saga/effects';
import { getSession, setCardsData } from './session/saga';
import { GET_SESSION_ACTION, SET_CARDS_DATA_ACTION } from './constants';

const rootSaga = function* () {
  yield all([takeLatest(GET_SESSION_ACTION, getSession)]);
  yield all([takeLatest(SET_CARDS_DATA_ACTION, setCardsData)]);
};

export default rootSaga;
