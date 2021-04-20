import { fromJS } from 'immutable';
import ACTIONS from 'store/democode.constants';

const initialState = fromJS({
  performer: { data: [], loading: false, error: '' },
  loading: false,
  error: '',
  selectedPerformer: {},
});

export default function myPerformerReducer(state = initialState, action: any) {
  switch (action.type) {
    case ACTIONS.FETCH_MY_PERFORMER_LIST.PENDING: {
      return state.setIn(['performer', 'loading'], action.status === 'LOADING');
    }
    case ACTIONS.FETCH_MY_PERFORMER_LIST.SUCCESS: {
      return state
        .setIn(['performer', 'loading'], false)
        .setIn(['performer', 'error'], '')
        .setIn(['performer', 'data'], action.data);
    }
    case ACTIONS.FETCH_MY_PERFORMER_LIST.ERROR: {
      return state.setIn(['performer', 'loading'], false).set(['performer', 'error'], action.error);
    }
    case ACTIONS.SET_SELECTED_PERFORMER_FOR_VIEW: {
      console.log('In actions', action);
      return state.set('selectedPerformer', action.data);
    }
    case ACTIONS.SET_CREATE_MY_PERFORMER_LIST.PENDING: {
      return state.set('loading', true);
    }
    case ACTIONS.SET_CREATE_MY_PERFORMER_LIST.SUCCESS: {
      const prevList = state.getIn(['performer', 'data']);
      return state
        .set('loading', false)
        .set('error', '')
        .setIn(['performer', 'data'], [...prevList, action.data]);
    }
    case ACTIONS.SET_CREATE_MY_PERFORMER_LIST.ERROR: {
      return state.set('loading', false).set('error', action.error);
    }
    default: {
      return state;
    }
  }
}
