import {
  put, takeEvery,
} from 'redux-saga/effects';

function* incrementAsync() {
  yield new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  yield put({ type: 'INCREMENT' });
}

function* mySaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export default mySaga;
