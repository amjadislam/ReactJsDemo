import { all, takeEvery, put, call } from 'redux-saga/effects';
import { OptionList, NotificationList } from 'modules/general/general.type';
import { generalActions } from 'store/actions';
import ACTIONS from 'store/democode.constants';
import { generalApi } from 'store/services/general.services';

function* fetchGeneralSetting() {
  try {
    yield put(generalActions.getSettings.pending);
    const response: OptionList = yield call(generalApi.fetchGeneralSetting);
    yield put(generalActions.getSettings.success(response));
  } catch (error) {
    yield put(generalActions.getSettings.error(error.message));
  }
}

function* fetchNotifications() {
  try {
    yield put(generalActions.getNotifications.pending);
    const response: NotificationList = yield call(generalApi.fetchNotifications);
    yield put(generalActions.getNotifications.success(response));
  } catch (error) {
    yield put(generalActions.getNotifications.error(error.message));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(ACTIONS.GENERAL_SETTING_BEGIN, fetchGeneralSetting),
    takeEvery(ACTIONS.NOTIFICATIONS_BEGIN, fetchNotifications),
  ]);
}
