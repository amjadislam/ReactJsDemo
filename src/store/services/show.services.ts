import { roleDummyList } from 'helpers/data/SelectOptions';
import {
  IAddPerformerInMyList,
  IPerformerSearchParam,
  ISendJobRequestParam,
  IPersonalNote,
  IShowListingParams,
} from 'modules/params/param.type';
import { DateJobRequestParams, ShowCreateParams, ShowDayJob, ShowDayJobList } from 'modules/Show/show.types';
import { UserList } from 'modules/user/types';
import { dummyPerformer } from 'store/sagas/show';
import { apiCall } from 'store/services/service';
import { URL_CREATE_ROLE, URL_CREATE_SHOW, URL_SHOW_LISTING } from './URL';

export const showApi = {
  fetchShowListing(show: IShowListingParams) {
    return apiCall.get({ url: URL_SHOW_LISTING, isAuthToken: true, params: show });
  },

  createShow(show: ShowCreateParams) {
    return apiCall.post({ url: URL_CREATE_SHOW, isAuthToken: true, params: show });
  },
  createRole(show: ShowDayJob) {
    return apiCall.post({ url: URL_CREATE_ROLE, isAuthToken: false, params: show });
  },
  fetchDayJobListing(params: DateJobRequestParams) {
    console.log('Params', params);
    return new Promise<ShowDayJobList>((resolve, reject) => {
      try {
        const data = roleDummyList;
        if (data.length > 0) resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  },
  searchPerformer(params: IPerformerSearchParam) {
    console.log('Params', params);
    return new Promise<UserList>((resolve, reject) => {
      try {
        const data = dummyPerformer;
        if (data.length > 0) resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  },
  sendRequestToPerfomer(params: ISendJobRequestParam) {
    console.log('parmas', params);
    return new Promise<string>((resolve) => {
      resolve('Request Posted');
    });
  },
  addPerformerInMyList(params: IAddPerformerInMyList) {
    console.log('parmas', params);
    return new Promise<string>((resolve) => {
      resolve('Request Posted');
    });
  },

  savePersonalNote(params: IPersonalNote) {
    console.log('parmas', params);
    return new Promise<string>((resolve) => {
      resolve('Request Posted');
    });
  },
};

export default showApi;
