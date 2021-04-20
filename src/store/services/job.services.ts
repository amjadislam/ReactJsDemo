import { JobList } from 'modules/jobs/types';
import { ShowDayJobList } from 'modules/Show/show.types';
import { bookingData, castingRequestData } from 'store/sagas/show';

export const jobApi = {
  fetchCastingRequest() {
    return new Promise<ShowDayJobList>((resolve, reject) => {
      try {
        const data = castingRequestData;
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  },
  fetchBookingRequest() {
    return new Promise<JobList>((resolve, reject) => {
      try {
        const data = bookingData;
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  },
  fetchCastingCallRequest() {
    return new Promise<ShowDayJobList>((resolve, reject) => {
      try {
        const data = castingRequestData;
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  },
  fetchCastingUpdates() {
    return new Promise<ShowDayJobList>((resolve, reject) => {
      try {
        const data = castingRequestData;
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  },
};

export default jobApi;
