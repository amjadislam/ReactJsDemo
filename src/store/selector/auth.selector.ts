import createSelector from 'utils/reselect';

const userStateData = (state: any) => {
  const { users } = state;
  return users || {};
};

export const getUser = createSelector(userStateData, (users) => users.get('user') || null);

export const isSignUpCompleted = createSelector(userStateData, (users) => users.get('isSignUpCompleted') || false);

export const loginInProgress = createSelector(userStateData, (users) => users.get('loading'));

export const loginError = createSelector(userStateData, (users) => users.get('error'));

export const getSignupStep = createSelector(userStateData, (users) => users.get('step'));

export const landingPage = createSelector(userStateData, (users) => {
  const user = users.get('user') || null;
  if (user.name) return '/bgperformer/home';
  return '/';
});

export const selectedTab = createSelector(userStateData, (users) => users.get('selectedTab'));
