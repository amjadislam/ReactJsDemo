import { fromJS } from 'immutable';
import ACTIONS from 'store/democode.constants';

const initialState = fromJS({
  profile: {},
});

export default function performerReducer(state = initialState, action: any) {
  switch (action.type) {
    case ACTIONS.FETCH_PERFORMER_PROFILE.PENDING: {
      return state.setIn(['profile', 'loading'], action.status === 'LOADING');
    }
    case ACTIONS.FETCH_PERFORMER_PROFILE.SUCCESS: {
      return state
        .setIn(['profile', 'loading'], false)
        .setIn(['profile', 'error'], '')
        .setIn(['profile', 'data'], action.data);
    }
    case ACTIONS.FETCH_PERFORMER_PROFILE.ERROR: {
      return state.setIn(['profile', 'loading'], false).setIn(['profile', 'error'], '');
    }
    default: {
      return state;
    }
  }
}
