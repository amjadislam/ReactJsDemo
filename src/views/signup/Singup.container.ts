import { connect } from 'react-redux';
import Signup from 'views/signup/Signup';
import { userRegistrationRequest } from 'store/actions/auth.actions';
import { getSignupStep, loginError, loginInProgress } from 'store/selector/auth.selector';
import { User } from 'modules/user/types';

const mapStateToProps = (state: User) => {
  const isLoading = loginInProgress(state);
  const signupStep = getSignupStep(state);
  const signupError = loginError(state);

  return {
    isLoading,
    signupStep,
    signupError,
  };
};
const mapDispatchToProps = { registrationRequest: userRegistrationRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
