import { fromJS } from 'immutable';
import ACTIONS from 'store/democode.constants';

const initialState = fromJS({
  searchUserList: [],
  dropdownOptions: [],
  loading: false,
  error: '',
  toastList: [],
  skills: null,
});

export default function generalReducer(state = initialState, action: any) {
  switch (action.type) {
    case ACTIONS.GENERAL_SETTING.PENDING: {
      return state.set('loading', action.status === 'LOADING');
    }
    case ACTIONS.GENERAL_SETTING.SUCCESS: {
      return state.set('loading', false).set('error', '').set('dropdownOptions', action.data);
    }
    case ACTIONS.GENERAL_SETTING.ERROR: {
      return state.set('loading', false).set('error', action.error);
    }
    case ACTIONS.NOTIFICATIONS.PENDING: {
      return state.set('loading', action.status === 'LOADING');
    }
    case ACTIONS.NOTIFICATIONS.SUCCESS: {
      return state.set('loading', false).set('error', '').set('notifications', action.data);
    }
    case ACTIONS.NOTIFICATIONS.ERROR: {
      return state.set('loading', false).set('error', action.error);
    }
    case ACTIONS.ADD_TOAST_IN_LIST: {
      const list = state.get('toastList') || [];
      return state.set('toastList', [...list, action.data]);
    }
    case ACTIONS.REMOVE_TOAST_IN_LIST: {
      const list = state.get('toastList') || [];
      if (action.data < list.length) {
        list.splice(action.data, 1);
        return state.set('toastList', [...list]);
      }
      return state;
    }
    default: {
      return state;
    }
  }
}
