import { all, spawn } from 'redux-saga/effects';
import democodeSaga from 'store/sagas';

export default function* root() {
  yield all([spawn(democodeSaga)]);
}
