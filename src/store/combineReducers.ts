import { combineReducers } from 'redux';
import userReducer from 'store/reducers/auth.reducers';
import showReducer from 'store/reducers/show.reducers';
import generalReducer from 'store/reducers/general.reducers';
import myPerformerReducer from 'store/reducers/myPerformer.reducers';
import jobReducer from 'store/reducers/job.reducers';
import performerReducer from 'store/reducers/performer.reducers';
import ACTIONS from 'store/democode.constants';

const appReducer = combineReducers({
  users: userReducer,
  shows: showReducer,
  general: generalReducer,
  myPerformer: myPerformerReducer,
  job: jobReducer,
  performer: performerReducer,
});

const rootReducer = (state: any, action: any) => {
  let prevState = state;
  if (action.type === ACTIONS.AUTH_LOGOUT) prevState = undefined;

  return appReducer(prevState, action);
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
