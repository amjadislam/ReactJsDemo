import { OptionList, NotificationList, ToastItem } from 'modules/general/general.type';
import ACTIONS, { FETCH_STATUS } from 'store/democode.constants';

export const getSettings = {
  pending: {
    type: ACTIONS.GENERAL_SETTING.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data: OptionList) => ({
    type: ACTIONS.GENERAL_SETTING.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error: Error) => ({
    type: ACTIONS.GENERAL_SETTING.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};
export const getSettingRequest = () => ({
  type: ACTIONS.GENERAL_SETTING_BEGIN,
  data: {},
});

export const showToast = (data: ToastItem) => ({
  type: ACTIONS.ADD_TOAST_IN_LIST,
  data,
});

export const removeToast = (data: number) => ({
  type: ACTIONS.REMOVE_TOAST_IN_LIST,
  data,
});

export const getNotifications = {
  pending: {
    type: ACTIONS.GENERAL_SETTING.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data: NotificationList) => ({
    type: ACTIONS.GENERAL_SETTING.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error: Error) => ({
    type: ACTIONS.GENERAL_SETTING.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};
export const getNotificationsRequest = () => ({
  type: ACTIONS.NOTIFICATIONS_BEGIN,
  data: {},
});
