import { fromJS } from 'immutable';
import ACTIONS from 'store/democode.constants';

const initialState = fromJS({
  castingRequest: {},
  booking: {},
  selectedJob: {},
  calls: {},
  updatedNews: {},
});

export default function jobReducer(state = initialState, action: any) {
  switch (action.type) {
    case ACTIONS.FETCH_CASTING_REQUEST.PENDING: {
      return state.setIn(['castingRequest', 'loading'], action.status === 'LOADING');
    }
    case ACTIONS.FETCH_CASTING_REQUEST.SUCCESS: {
      return state
        .setIn(['castingRequest', 'loading'], false)
        .setIn(['castingRequest', 'error'], '')
        .setIn(['castingRequest', 'data'], action.data);
    }
    case ACTIONS.FETCH_CASTING_REQUEST.ERROR: {
      return state.setIn(['castingRequest', 'loading'], false).setIn(['castingRequest', 'error'], '');
    }
    case ACTIONS.FETCH_BOOKING_REQUEST.PENDING: {
      return state.setIn(['booking', 'loading'], action.status === 'LOADING');
    }
    case ACTIONS.FETCH_BOOKING_REQUEST.SUCCESS: {
      return state
        .setIn(['booking', 'loading'], false)
        .setIn(['booking', 'error'], '')
        .setIn(['booking', 'data'], action.data);
    }
    case ACTIONS.FETCH_BOOKING_REQUEST.ERROR: {
      return state.setIn(['booking', 'loading'], false).setIn(['booking', 'error'], '');
    }
    case ACTIONS.SET_JOB_FOR_VIEW: {
      console.log('Job For View', action.data);
      return state.set('selectedJob', action.data);
    }
    case ACTIONS.CLOSE_JOB_FOR_VIEW: {
      return state.set('selectedJob', null);
    }
    case ACTIONS.FETCH_CASTING_CALL_REQUEST.PENDING: {
      return state.setIn(['calls', 'loading'], action.status === 'LOADING');
    }
    case ACTIONS.FETCH_CASTING_CALL_REQUEST.SUCCESS: {
      return state
        .setIn(['calls', 'loading'], false)
        .setIn(['calls', 'error'], '')
        .setIn(['calls', 'data'], action.data);
    }
    case ACTIONS.FETCH_CASTING_CALL_REQUEST.ERROR: {
      return state.setIn(['calls', 'loading'], false).setIn(['calls', 'error'], '');
    }
    case ACTIONS.FETCH_CASTING_UPDATE_NEWS.PENDING: {
      return state.setIn(['updatedNews', 'loading'], action.status === 'LOADING');
    }
    case ACTIONS.FETCH_CASTING_UPDATE_NEWS.SUCCESS: {
      return state
        .setIn(['updatedNews', 'loading'], false)
        .setIn(['updatedNews', 'error'], '')
        .setIn(['updatedNews', 'data'], action.data);
    }
    case ACTIONS.FETCH_CASTING_UPDATE_NEWS.ERROR: {
      return state.setIn(['updatedNews', 'loading'], false).setIn(['updatedNews', 'error'], '');
    }
    default: {
      return state;
    }
  }
}
