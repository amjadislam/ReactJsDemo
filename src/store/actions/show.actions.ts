import { IPerformerSearchParam, ISendJobRequestParam, IAddPerformerInMyList } from 'modules/params/param.type';
import {
  DateJobRequestParams,
  Show,
  ShowCreateParams,
  ShowDayJob,
  ShowDayJobList,
  ShowList,
} from 'modules/Show/show.types';
import { UserList } from 'modules/user/types';
import ACTIONS, { FETCH_STATUS } from 'store/democode.constants';

export const showListing = {
  pending: {
    type: ACTIONS.SHOW_LISTING_API.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data: ShowList) => ({
    type: ACTIONS.SHOW_LISTING_API.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error: Error) => ({
    type: ACTIONS.SHOW_LISTING_API.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const createShow = {
  pending: {
    type: ACTIONS.CREATE_SHOW.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data: Show) => ({
    type: ACTIONS.CREATE_SHOW.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error: Error) => ({
    type: ACTIONS.CREATE_SHOW.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const showSelectedDateJob = {
  pending: {
    type: ACTIONS.SET_SHOW_SELECTED_DATE_JOB.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data: ShowDayJobList) => ({
    type: ACTIONS.SET_SHOW_SELECTED_DATE_JOB.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error: Error) => ({
    type: ACTIONS.SET_SHOW_SELECTED_DATE_JOB.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const searchPerformer = {
  pending: {
    type: ACTIONS.SET_PERFORMER_SEARCH.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data: UserList) => ({
    type: ACTIONS.SET_PERFORMER_SEARCH.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error: Error) => ({
    type: ACTIONS.SET_PERFORMER_SEARCH.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const jobRequestToPerformer = {
  pending: {
    type: ACTIONS.SET_JOB_REQUEST_TO_PERFOMER.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data: string) => ({
    type: ACTIONS.SET_JOB_REQUEST_TO_PERFOMER.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error: Error) => ({
    type: ACTIONS.SET_JOB_REQUEST_TO_PERFOMER.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const addPerfomerInMyList = {
  pending: {
    type: ACTIONS.SET_ADD_PERFOMER_IN_MY_LIST.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data: string) => ({
    type: ACTIONS.SET_ADD_PERFOMER_IN_MY_LIST.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error: Error) => ({
    type: ACTIONS.SET_ADD_PERFOMER_IN_MY_LIST.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const callAddPerformerInFavList = (payload: IAddPerformerInMyList) => ({
  type: ACTIONS.SET_ADD_PERFOMER_IN_MY_LIST_BEGIN,
  payload,
});

export const sendJobRequestToPerfomer = (payload: ISendJobRequestParam) => ({
  type: ACTIONS.SET_JOB_REQUEST_TO_PERFOMER_BEGIN,
  payload,
});

export const searchPerformerRequest = (payload: IPerformerSearchParam) => ({
  type: ACTIONS.SET_PERFORMER_SEARCH_BEGIN,
  payload,
});

export const getShowListingRequest = () => ({
  type: ACTIONS.FETCH_SHOW_LISTING_BEGIN,
});

export const setShowListing = (state: any) => ({
  type: ACTIONS.SET_SHOW_LISTING,
  data: state,
});

export const setSelectShow = (id: string) => ({
  type: ACTIONS.SHOW_SELECTION_CHANGE,
  data: id,
});

export const getCreateShowRequest = (show: ShowCreateParams) => ({
  type: ACTIONS.CREATE_SHOW_BEGIN,
  payload: show,
});

export const showEditRequest = (show: Show) => ({
  type: ACTIONS.CALL_SHOW_EDIT,
  data: show,
});

export const showDetailRequest = (show: Show) => ({
  type: ACTIONS.CALL_SHOW_DETAIL,
  data: show,
});

export const getShowDayJobRequest = (show: ShowDayJobList) => ({
  type: ACTIONS.SET_SHOW_DAY_JOB_LIST,
  data: show,
});

export const createJob = {
  pending: {
    type: ACTIONS.CREATE_JOB.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data: ShowDayJob) => ({
    type: ACTIONS.CREATE_JOB.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error: Error) => ({
    type: ACTIONS.CREATE_JOB.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const addJob = (data: ShowDayJob) => ({
  type: ACTIONS.ADD_JOB,
  data,
});

export const createRoleRequest = (job: ShowDayJob) => ({
  type: ACTIONS.CREATE_JOB,
  payload: job,
});

export const setSelectedJob = (job: ShowDayJob) => ({
  type: ACTIONS.SET_SELETED_JOB,
  data: job,
});

export const createJobBegin = (job: ShowDayJob) => ({
  type: ACTIONS.CREATE_JOB_BEGIN,
  pyaload: job,
});

export const setShowSelectedDate = (data: DateJobRequestParams) => ({
  type: ACTIONS.SET_SHOW_SELECTED_DATE_BEGIN,
  payload: data,
});

export const clearSearchResult = () => ({
  type: ACTIONS.SET_CLEAR_SEARCH_RESULT,
});

export const createEmptyShowJob = () => {
  const showJob: ShowDayJob = {
    id: '-1',
    workingDayId: '',
    title: '',
    description: '',
    date: '',
    location: '',
    minHeight: '',
    maxHeight: '',
    ethinicity: '',
    clothingOption: '',
    bodyRequirements: '',
    remarks: '',
    additionalInfo: '',
    createdBy: '',
    status: '',
    isActive: true,
    noOfPerformerRequired: 1,
    dates: '',
    isSaveForLater: false,
  };
  return {
    type: ACTIONS.CREATE_EMPTY_SHOW_JOB,
    data: showJob,
  };
};
