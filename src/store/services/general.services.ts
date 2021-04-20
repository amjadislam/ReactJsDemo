import { OptionList, NotificationList } from 'modules/general/general.type';
import { generalOptions, notifications } from 'store/sagas/show';

export const generalApi = {
  fetchGeneralSetting() {
    return new Promise<OptionList>((resolve, reject) => {
      try {
        const data = generalOptions;
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  },

  fetchNotifications() {
    return new Promise<NotificationList>((resolve, reject) => {
      try {
        const data = notifications;
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  },
};

export default generalApi;
