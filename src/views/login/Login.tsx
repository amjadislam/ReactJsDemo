import React, { FunctionComponent, useEffect, useState } from 'react';
import InputField from 'components/controls/input/input';
import Button from 'components/controls/button/button';
import Header from 'components/topHeader/topHeader';
import buttonStyle from 'components/controls/button/button.module.css';
import InputStyle from 'components/controls/input/input.module.css';
import LoginStyle from 'views/login/login.module.css';
import { useHistory } from 'react-router';
import { checkEmail } from 'utils/FormValidation';
import { useSelector } from 'react-redux';
import { getUser, loginError, loginInProgress } from 'store/selector/auth.selector';
import { getHomePage } from 'helpers/utils';

interface LoginProps {
  loginRequest: Function;
  resetErrorMesage: Function;
}

const Login: FunctionComponent<LoginProps> = (props) => {
  const { loginRequest, resetErrorMesage } = props;
  const history = useHistory();

  const isLoading = useSelector(loginInProgress);
  const authError = useSelector(loginError);
  const user = useSelector(getUser);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    isButtonEnabled();
    console.log('User', user);
    if (user && user.firstName) {
      const path = getHomePage(user.role);
      history.push(path);
    }
  }, [user, email, password]);

  const handleLogin = () => {
    setEmailError(checkEmail(email));
    loginRequest({
      email,
      password,
    });
  };

  const handleSingup = () => {
    resetErrorMesage();
    history.push('/signupcategory');
  };

  const handleKeyDownEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  const isButtonEnabled = () => {
    setDisabled(email.length < 1 || password.length < 1 || emailError.length > 0);
  };

  const handleBlur = (event: React.FormEvent<HTMLInputElement>) => {
    const val = event.currentTarget.value;
    setEmailError(checkEmail(val));
    setDisabled(emailError.length > 0);
  };

  return (
    <div>
      <div>
        <Header />
        <div className={LoginStyle.backgroundWrapper}>
          <h1>
            Login to
            <span>&nbsp;Casting </span>
            Pax
          </h1>
          <div className={LoginStyle.loginWrapper}>
            <div>
              <InputField
                label="Email Address"
                errorMessage={emailError}
                blurHandler={handleBlur}
                handleChange={setEmail}
              />

              <InputField
                type="password"
                label="Password"
                cssClass={InputStyle.passwordInput}
                handleChange={setPassword}
                handleKeyDown={handleKeyDownEvent}
              />
              <div className="text-left">
                <a href="/#" className={`text-left ${LoginStyle.forgetPassword}`}>
                  Forgot Password?
                </a>
              </div>
            </div>
            <h5 className={LoginStyle.errorMessage}>{authError}</h5>
            <div className={`${buttonStyle.loginBtnWrapper} ${LoginStyle.mT20}`}>
              <div>
                <Button label="Signup" clickHandler={handleSingup} />
              </div>
              <div>
                <Button
                  label="Login"
                  cssClass="login-btn w-100"
                  clickHandler={handleLogin}
                  isDisabled={disabled}
                  showLoading={isLoading}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
