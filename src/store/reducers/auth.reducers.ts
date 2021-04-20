import { fromJS } from 'immutable';
import getItemFromLocalStorage from 'utils/getItemFromLocalStorage';
import ACTIONS from 'store/democode.constants';

const initialState = fromJS({
  user: getItemFromLocalStorage('user') || {},
  loading: false,
  error: '',
  step: 1,
  searchUserList: [],
  selectedTab: 1,
  isSignUpCompleted: false,
});

export default function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case ACTIONS.LOGIN.PENDING: {
      return state.set('loading', action.status === 'LOADING');
    }
    case ACTIONS.LOGIN.SUCCESS: {
      return state.set('loading', false).set('error', '').set('user', action.data);
    }
    case ACTIONS.LOGIN.ERROR: {
      console.log('Error', action);
      return state.set('loading', false).set('error', action.error);
    }
    case ACTIONS.SIGNUP.PENDING: {
      return state.set('loading', action.status === 'LOADING');
    }
    case ACTIONS.SIGNUP.SUCCESS: {
      return state.set('loading', false).set('error', '').set('step', 2).set('user', action.data);
    }
    case ACTIONS.SIGNUP.ERROR: {
      return state.set('loading', false).set('error', action.error);
    }
    case ACTIONS.PEROFILE_UPDATE: {
      if (action.data === 'PERFORMER') return state.set('step', 1).set('isSignUpCompleted', true);
      return state.set('step', 1).set('isSignUpCompleted', true).set('user', {});
    }
    case ACTIONS.CHANGE_SELECTED_TAB:
      return state.set('selectedTab', action.data);
    case ACTIONS.AUTH_LOGOUT:
      return state.set('user', null);
    case ACTIONS.RESET_ERROR_MESSAGE:
      return state.set('loading', false).set('error', '');
    default: {
      return state;
    }
  }
}
