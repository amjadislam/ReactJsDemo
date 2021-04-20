import { dummySkills, notifications } from 'store/sagas/show';
import createSelector from 'utils/reselect';

const generalStateData = (state: any) => {
  const { general } = state;
  return general || {};
};

export const getOptions = createSelector(generalStateData, (general) => general.get('dropdownOptions'));

export const getToastList = createSelector(generalStateData, (general) => general.get('toastList'));

export const getDefaultSkills = createSelector(generalStateData, (general) => general.get('skills') || dummySkills);

export const getNotificationList = createSelector(
  generalStateData,
  (general) => general.get('notifications') || notifications,
);
