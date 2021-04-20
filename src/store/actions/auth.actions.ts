import { IProfileFileParam } from 'modules/params/param.type';
import { User, LOGIN_PARAMS, SignupProfile } from 'modules/user/types';
import ACTIONS, { FETCH_STATUS } from 'store/democode.constants';

export const loginAttempt = {
  pending: {
    type: ACTIONS.LOGIN.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data: User) => ({
    type: ACTIONS.LOGIN.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error: Error) => ({
    type: ACTIONS.LOGIN.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const logoutSucceed = () => ({
  type: ACTIONS.AUTH_LOGOUT,
});

export const callLogout = () => ({
  type: ACTIONS.AUTH_LOGOUT_BEGIN,
});

export const authenticatedUser = (state: User) => ({
  type: ACTIONS.AUTHENTICATED_USER,
  data: state,
});

export const getLoginRequest = (state: LOGIN_PARAMS) => ({
  type: ACTIONS.LOGIN_CALL,
  payload: state,
});

export const registerUser = {
  pending: {
    type: ACTIONS.SIGNUP.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data: User) => ({
    type: ACTIONS.SIGNUP.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error: Error) => ({
    type: ACTIONS.SIGNUP.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const profileFileUpload = {
  pending: {
    type: ACTIONS.PROFILE_FILE_UPLOAD.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data: string) => ({
    type: ACTIONS.PROFILE_FILE_UPLOAD.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error: Error) => ({
    type: ACTIONS.PROFILE_FILE_UPLOAD.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const signUpComplete = (userType: string) => ({
  type: ACTIONS.PEROFILE_UPDATE,
  data: userType,
});

export const userRegistrationRequest = (state: User) => ({
  type: ACTIONS.REGISTER_NEW_USER,
  payload: state,
});

export const getSignupProfileRequest = (state: SignupProfile) => ({
  type: ACTIONS.SIGNUP_STEP_TWO,
  payload: state,
});

export const setSelectedTab = (state: string) => ({
  type: ACTIONS.CHANGE_SELECTED_TAB,
  data: state,
});

export const resetErrorMesage = () => ({
  type: ACTIONS.RESET_ERROR_MESSAGE,
});

export const uploadProfileImageBegin = (state: IProfileFileParam) => ({
  type: ACTIONS.PROFILE_FILE_UPLOAD_BEGIN,
  payload: state,
});
