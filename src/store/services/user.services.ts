import { IUserSearch } from 'modules/params/param.type';
import { apiCall } from './service';
import { URL_SEARCH_DIRECTOR } from './URL';

export const userApi = {
  async searchUser(search: IUserSearch) {
    try {
      const res = await apiCall.post({ url: URL_SEARCH_DIRECTOR, isAuthToken: false, params: search });
      return res;
    } catch (error) {
      console.log('Error ', error.message);
      return { data: [] };
    }
  },
};

export default userApi;
