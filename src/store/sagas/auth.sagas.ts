import { call, put, all, takeEvery } from 'redux-saga/effects';
import { LOGIN_PARAMS, SignupProfile, User } from 'modules/user/types';
import { authActions } from 'store/actions';
import api from 'store/services/auth.services';
import ACTIONS from 'store/democode.constants';
import ApiResponse from 'modules/response/response.types';
import { IProfileFileParam } from 'modules/params/param.type';

function* login(state: { type: string; payload: LOGIN_PARAMS }) {
  try {
    yield put(authActions.loginAttempt.pending);
    const response: ApiResponse = yield call(api.loginRequest, state.payload);
    yield localStorage.removeItem('profileStep');
    yield localStorage.setItem('user', JSON.stringify(response.data));
    if (response.data.token) yield localStorage.setItem('accessToken', response.data.token);
    yield put(authActions.loginAttempt.success(response.data));
  } catch (error) {
    yield put(authActions.loginAttempt.error(error.message));
  }
}

function* logout() {
  yield call([localStorage, 'removeItem'], 'user');
  yield call([localStorage, 'removeItem'], 'accessToken');
  yield put(authActions.logoutSucceed());
}

function* signup(state: { type: string; payload: User }) {
  try {
    yield put(authActions.registerUser.pending);
    const response: ApiResponse = yield call(api.signupRequest, state.payload);
    yield localStorage.setItem('profileStep', '2');
    yield localStorage.setItem('puser', JSON.stringify(response.data));
    if (response.data.token) yield localStorage.setItem('accessToken', response.data.token);
    yield put(authActions.registerUser.success(response.data));
  } catch (error) {
    yield put(authActions.registerUser.error(error.message));
  }
}

function* signupProfile(state: { type: string; payload: SignupProfile }) {
  try {
    yield put(authActions.registerUser.pending);
    const response: ApiResponse = yield call(api.profileUpdate, state.payload.user);
    yield localStorage.removeItem('profileStep');
    yield localStorage.removeItem('puser');
    yield put(authActions.registerUser.success(response.data));
    if (response.data.role === 'PERFORMER') {
      yield localStorage.setItem('user', JSON.stringify(response.data));
      yield put(authActions.signUpComplete(response.data.role));
    } else {
      yield localStorage.removeItem('accessToken');
      yield put(authActions.signUpComplete(response.data.role));
    }
  } catch (error) {
    yield put(authActions.registerUser.error(error.message));
  }
}

function* fileUpload(state: { type: string; payload: IProfileFileParam }) {
  try {
    yield put(authActions.profileFileUpload.pending);
    const response: ApiResponse = yield call(api.profileFiles, state.payload);
    yield put(authActions.profileFileUpload.success(response.data));
  } catch (error) {
    yield put(authActions.profileFileUpload.error(error.message));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(ACTIONS.LOGIN_CALL, login),
    takeEvery(ACTIONS.REGISTER_NEW_USER, signup),
    takeEvery(ACTIONS.AUTH_LOGOUT_BEGIN, logout),
    takeEvery(ACTIONS.SIGNUP_STEP_TWO, signupProfile),
    takeEvery(ACTIONS.PROFILE_FILE_UPLOAD_BEGIN, fileUpload),
  ]);
}
