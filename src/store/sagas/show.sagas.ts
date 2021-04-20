import { call, all, takeEvery, put } from 'redux-saga/effects';
import { generalActions, showActions } from 'store/actions';
import ACTIONS from 'store/democode.constants';
import showApi from 'store/services/show.services';
import { DateJobRequestParams, ShowCreateParams, ShowDayJob } from 'modules/Show/show.types';
import ApiResponse from 'modules/response/response.types';
import { IAddPerformerInMyList, IPerformerSearchParam, ISendJobRequestParam } from 'modules/params/param.type';
import { UserList } from 'modules/user/types';

function* fetchShowListing(state: { type: string; payload: any }) {
  try {
    console.log('In Fetch Show Listing saga', state);
    yield put(showActions.showListing.pending);
    const response: ApiResponse = yield call(showApi.fetchShowListing, state.payload);
    yield put(showActions.showListing.success(response.data));
  } catch (error) {
    yield put(showActions.showListing.error(error.message));
  }
}

function* createShow(state: { type: string; payload: ShowCreateParams }) {
  try {
    yield put(showActions.createShow.pending);
    const response: ApiResponse = yield call(showApi.createShow, state.payload);
    yield put(showActions.createShow.success(response.data));
    const msg = { id: Math.random().toString(), title: 'Show Created Successfully', type: 'success' };
    yield put(generalActions.showToast(msg));
  } catch (error) {
    yield put(showActions.createShow.error(error.message));
  }
}

function* createShowRole(state: { type: string; payload: ShowDayJob }) {
  try {
    yield call(showActions.addJob, state.payload);
    yield put(showActions.createJob.pending);
    const response: ApiResponse = yield call(showApi.createRole, state.payload);
    yield put(showActions.createJob.success(response.data));
    const msg = { id: Math.random().toString(), title: 'Role Created Successfully', type: 'success' };
    yield put(generalActions.showToast(msg));
  } catch (error) {
    yield put(showActions.createJob.error(error.message));
  }
}

function* fetchDayJobs(state: { type: string; payload: DateJobRequestParams }) {
  try {
    yield put(showActions.showSelectedDateJob.pending);
    const response: ApiResponse = yield call(showApi.fetchDayJobListing, state.payload);
    yield put(showActions.showSelectedDateJob.success(response.data));
  } catch (error) {
    yield put(showActions.showSelectedDateJob.error(error.message));
  }
}

function* searcPerformerForJob(state: { type: string; payload: IPerformerSearchParam }) {
  try {
    yield put(showActions.searchPerformer.pending);
    const response: UserList = yield call(showApi.searchPerformer, state.payload);
    yield put(showActions.searchPerformer.success(response));
  } catch (error) {
    yield put(showActions.searchPerformer.error(error.message));
  }
}

function* sendRequestToPerfomer(state: { type: string; payload: ISendJobRequestParam }) {
  try {
    yield put(showActions.jobRequestToPerformer.pending);
    const response: string = yield call(showApi.sendRequestToPerfomer, state.payload);
    yield put(showActions.jobRequestToPerformer.success(response));
  } catch (error) {
    yield put(showActions.jobRequestToPerformer.error(error.message));
  }
}

function* addPerformerInList(state: { type: string; payload: IAddPerformerInMyList }) {
  try {
    yield put(showActions.addPerfomerInMyList.pending);
    const response: string = yield call(showApi.addPerformerInMyList, state.payload);
    yield put(showActions.addPerfomerInMyList.success(response));
  } catch (error) {
    yield put(showActions.addPerfomerInMyList.error(error.message));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(ACTIONS.FETCH_SHOW_LISTING_BEGIN, fetchShowListing),
    takeEvery(ACTIONS.CREATE_SHOW_BEGIN, createShow),
    takeEvery(ACTIONS.CREATE_JOB_BEGIN, createShowRole),
    takeEvery(ACTIONS.SET_SHOW_SELECTED_DATE_BEGIN, fetchDayJobs),
    takeEvery(ACTIONS.SET_PERFORMER_SEARCH_BEGIN, searcPerformerForJob),
    takeEvery(ACTIONS.SET_JOB_REQUEST_TO_PERFOMER_BEGIN, sendRequestToPerfomer),
    takeEvery(ACTIONS.SET_ADD_PERFOMER_IN_MY_LIST_BEGIN, addPerformerInList),
  ]);
}
