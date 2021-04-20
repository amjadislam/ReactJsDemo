import { fromJS, List } from 'immutable';
import { Show, ShowDayJob, ShowList } from 'modules/Show/show.types';
import { User } from 'modules/user/types';
import ACTIONS from 'store/democode.constants';

const initialState = fromJS({
  list: [],
  loading: false,
  error: '',
  selectedShowId: '',
  selectedShow: {},
  searchUserList: [],
  newShow: {},
  createShowModal: false,
  selectedJob: {},
  showEdit: {},
  dayJobList: [],
  selectedDate: '',
  performerResult: {},
  emailTemplates: [],
  showDetailView: {},
});

export default function showReducers(state = initialState, action: any) {
  switch (action.type) {
    case ACTIONS.SHOW_SELECTION_CHANGE: {
      const id = action.data;
      const showList = state.get('list') || List();
      const index = showList.findIndex((obj: Show) => obj.id === id);
      if (index !== -1) {
        const show = showList[index];
        return state.set('selectedShowId', id).set('selectedShow', { ...show });
      }
      return state.set('selectedShowId', id);
    }
    case ACTIONS.SHOW_LISTING_API: {
      const showList: ShowList = action.data;
      const selectedShowId = showList.length > 0 ? showList[showList.length - 1].id : '';
      const selecteShow = selectedShowId ? { ...showList[showList.length - 1] } : {};
      return state.set('list', showList).set('selectedShowId', selectedShowId).set('selectedShow', selecteShow);
    }
    case ACTIONS.ADD_SEARCH_USER_IN_LIST: {
      const prevList = state.get('searchUserList');
      const index = prevList.findIndex((x: User) => x.id === action.data.id);
      if (index === -1) {
        const newList = [...prevList, action.data];
        return state.set('searchUserList', newList);
      }
      return state;
    }
    case ACTIONS.REMOVE_SEARCH_USER_IN_LIST: {
      const prevList = state.get('searchUserList');
      const newList = prevList.filter((x: User) => x.id !== action.data.id);
      return state.set('searchUserList', [...newList]);
    }
    case ACTIONS.CREATE_SHOW.PENDING: {
      return state.setIn(['newShow', 'loading'], action.status === 'LOADING');
    }
    case ACTIONS.CREATE_SHOW.SUCCESS: {
      const prevList = state.get('list') || [];
      const filterList = prevList.filter((e: Show) => e.id !== action.data.id);
      const newList = [...filterList, action.data];
      return state
        .setIn(['newShow', 'loading'], false)
        .setIn(['newShow', 'error'], '')
        .setIn(['newShow', 'data'], action.data)
        .set('showEdit', {})
        .set('selectedShow', action.data)
        .set('selectedShowId', action.data.id)
        .set('list', newList);
    }
    case ACTIONS.CREATE_SHOW.ERROR: {
      return state
        .setIn(['newShow', 'loading'], false)
        .setIn(['newShow', 'error'], action.error)
        .setIn(['newShow', 'data'], {});
    }
    case ACTIONS.SET_SHOW_SELECTED_DATE_JOB.SUCCESS: {
      return state.set('dayJobList', action.data).set('selectedJob', {});
    }
    case ACTIONS.SET_SHOW_SELECTED_DATE_JOB.ERROR: {
      return state.set('dayJobList', []).set('selectedJob', {});
    }
    case ACTIONS.SET_SHOW_DAY_JOB_LIST: {
      return state.set('dayJobList', action.data);
    }
    case ACTIONS.CREATE_EMPTY_SHOW_JOB: {
      return state.set('selectedJob', action.data);
    }
    case ACTIONS.SET_SELETED_JOB: {
      return state.set('selectedJob', action.data);
    }
    case ACTIONS.CREATE_JOB.PENDING: {
      return state.set('loading', action.status === 'LOADING');
    }
    case ACTIONS.ADD_JOB: {
      const role = action.data;
      const prevRoleList = state.get('dayJobList');
      const index = prevRoleList.findIndex((j: ShowDayJob) => j.id === role.id);
      if (index !== -1) prevRoleList.splice(index, 1);
      return state.set('dayJobList', [...prevRoleList, role]).set('selectedJob', action.data);
    }
    case ACTIONS.CREATE_JOB.SUCCESS: {
      const role = action.data;
      const prevRoleList = state.get('dayJobList');
      return state
        .set('loading', false)
        .set('error', '')
        .set('selectedRole', role)
        .set('dayJobList', [...prevRoleList, role]);
    }
    case ACTIONS.CREATE_JOB.ERROR: {
      return state.set('loading', false).set('error', action.error);
    }
    case ACTIONS.CALL_SHOW_EDIT: {
      return state.set('showEdit', action.data);
    }
    case ACTIONS.CALL_SHOW_DETAIL: {
      return state.set('showDetailView', action.data);
    }
    case ACTIONS.SET_SHOW_SELECTED_DATE: {
      return state.set('selectedDate', action.data);
    }
    case ACTIONS.SET_PERFORMER_SEARCH.PENDING: {
      return state.setIn(['performerResult', 'loading'], true).setIn(['performerResult', 'error'], '');
    }
    case ACTIONS.SET_PERFORMER_SEARCH.SUCCESS: {
      return state
        .setIn(['performerResult', 'loading'], false)
        .setIn(['performerResult', 'error'], '')
        .setIn(['performerResult', 'data'], action.data);
    }
    case ACTIONS.SET_PERFORMER_SEARCH.ERROR: {
      return state
        .setIn(['performerResult', 'loading'], false)
        .setIn(['performerResult', 'error'], action.error)
        .setIn(['performerResult', 'data'], {});
    }
    case ACTIONS.SET_CLEAR_SEARCH_RESULT: {
      return state.setIn(['performerResult', 'data'], {});
    }
    case ACTIONS.SET_JOB_REQUEST_TO_PERFOMER.PENDING: {
      return state.set('loading', true).set('error', '');
    }
    case ACTIONS.SET_JOB_REQUEST_TO_PERFOMER.SUCCESS: {
      return state.set('loading', false);
    }
    case ACTIONS.SET_JOB_REQUEST_TO_PERFOMER.ERROR: {
      return state.set('loading', false).set('error', action.error);
    }
    default: {
      return state;
    }
  }
}
