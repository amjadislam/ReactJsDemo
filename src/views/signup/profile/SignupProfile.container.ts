import { connect } from 'react-redux';
import { getSignupProfileRequest, uploadProfileImageBegin } from 'store/actions/auth.actions';
import SignProfile from 'views/signup/profile/SignupProfile';
import { getSettingRequest } from 'store/actions/general.actions';
import { User } from 'modules/user/types';
import { isSignUpCompleted, loginError, loginInProgress } from 'store/selector/auth.selector';

const mapStateToProps = (state: User) => {
  const isLoading = loginInProgress(state);
  const authError = loginError(state);
  const isCompleted = isSignUpCompleted(state);

  return {
    isLoading,
    authError,
    isCompleted,
  };
};

const mapDispatchToProps = {
  completeProfile: getSignupProfileRequest,
  getSettingRequest,
  uploadProfileImageBegin,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignProfile);
