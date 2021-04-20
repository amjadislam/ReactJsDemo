import { spawn, all } from 'redux-saga/effects';
import authSagas from 'store/sagas/auth.sagas';
import showSagas from 'store/sagas/show.sagas';
import generalSagas from 'store/sagas/general.sagas';
import myPerformerSagas from 'store/sagas/myPerformer.sagas';
import jobSagas from 'store/sagas/job.sagas';
import performerSagas from 'store/sagas/performer.saga';

export default function* rootSaga() {
  yield all([
    spawn(authSagas),
    spawn(showSagas),
    spawn(generalSagas),
    spawn(myPerformerSagas),
    spawn(jobSagas),
    spawn(performerSagas),
  ]);
}
