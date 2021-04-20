import { IProfileFileParam } from 'modules/params/param.type';
import { LOGIN_PARAMS, User } from 'modules/user/types';
import { apiCall } from 'store/services/service';
import { URL_LOGIN, URL_PROFILE_UPDATE, URL_SINGUP, URL_PROFILE_FILE } from 'store/services/URL';

export const api = {
  loginRequest(loginParams: LOGIN_PARAMS) {
    return apiCall.post({ url: URL_LOGIN, isAuthToken: false, params: loginParams });
  },
  signupRequest(user: User) {
    return apiCall.post({ url: URL_SINGUP, isAuthToken: false, params: user });
  },
  profileUpdate(user: User) {
    return apiCall.post({ url: URL_PROFILE_UPDATE, isAuthToken: true, params: user });
  },

  profileFiles(params: IProfileFileParam) {
    return apiCall.filePost(URL_PROFILE_FILE, params);
  },
};

export default api;
