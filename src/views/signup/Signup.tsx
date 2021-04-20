import React, { FunctionComponent, useEffect, useState } from 'react';
import Header from 'components/topHeader/topHeader';
import signupCatStyle from 'components/singupCategory/signupCategory.module.css';
import buttonStyle from 'components/controls/button/button.module.css';
import InputField from 'components/controls/input/input';
import LoginStyle from 'views/login/login.module.css';
import Button from 'components/controls/button/button';
import { useHistory, useParams } from 'react-router';
import SelectOption from 'components/controls/select/SelectOption';
import TextArea from 'components/controls/textArea/textArea';
import CheckBox from 'components/controls/checkbox/checkBox';
import countries from 'helpers/data/countries';
import ItemLink from 'components/controls/link/ItemLink';
import TextErrorMessage from 'components/utils/errorMessage/TextErrorMessage';
import { checkEmail } from 'utils/FormValidation';
import SignupStyle from 'views/signup/signup.module.css';
import { getRoleId } from 'helpers/utils';
import { RoleCode } from 'modules/user/types';

interface SingupProps {
  isLoading: boolean;
  signupStep: number;
  signupError: string;
  registrationRequest: Function;
}

const Singup: FunctionComponent<SingupProps> = (props) => {
  const { isLoading, signupStep, signupError, registrationRequest } = props;

  const history = useHistory();
  const { type } = useParams<{ type: string }>();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [disable, setDisable] = useState(true);
  const [passwordNotmatch, setPasswordNotmatched] = useState('');
  const [address, setAddress] = useState('');
  const [aboutUs, setAboutUs] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    if (signupStep === 2) {
      history.push(`/profile/${type}`);
    }
    validateInput();
  });

  const handleLogin = () => {
    history.push('/login');
  };

  const handleBlur = (event: React.FormEvent<HTMLInputElement>) => {
    const val = event.currentTarget.value;
    setEmailError(checkEmail(val));
    validateInput();
  };

  const handlePasswordConfirmation = () => {
    if (password.length > 0 && confirmPassword.length > 0 && password !== confirmPassword) {
      setPasswordNotmatched('Password not match');
    } else {
      setPasswordNotmatched('');
    }
  };

  const textAreaChangeHandler = (event: React.FormEvent<HTMLTextAreaElement>, stateFun: Function) => {
    stateFun(event.currentTarget.value);
  };

  const validateInput = () => {
    const emailMsg = checkEmail(email);
    const isValidInput =
      emailMsg.length === 0 &&
      emailError.length === 0 &&
      firstName.length > 0 &&
      lastName.length > 0 &&
      password.length > 0 &&
      password === confirmPassword &&
      confirmPassword.length > 0 &&
      accept;

    setDisable(!isValidInput);
  };

  const handleSignup = () => {
    registrationRequest({
      name: firstName,
      firstName,
      lastName,
      email,
      address,
      country,
      password,
      aboutUs,
      role: getRoleId(type as RoleCode),
      isCompleted: false,
    });
  };

  return (
    <div className={signupCatStyle.signupWrapper}>
      <Header />
      <div className={signupCatStyle.backgroundWrapper}>
        <div className={signupCatStyle.bgInnerContent}>
          <h1>Sign up</h1>
          <p className={signupCatStyle.afterHeading}>Let’s Sign up first for enter into democode</p>
        </div>
        <div className={SignupStyle.signUpWrapper}>
          <TextErrorMessage message={signupError} />
          <p className={SignupStyle.noTextDesktop}>Let’s Sign up first for enter into democode</p>
          <div className="row">
            <div className="col-sm-6">
              <InputField label="First Name" handleChange={setFirstName} />
            </div>
            <div className="col-sm-6">
              <InputField label="Last Name" handleChange={setLastName} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <InputField label="Email" errorMessage={emailError} blurHandler={handleBlur} handleChange={setEmail} />
            </div>
            <div className="col-sm-6">
              <SelectOption label="Your country" data={countries} handleSelect={setCountry} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <InputField label="Mail Address" handleChange={setAddress} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <InputField
                label="Password"
                type="password"
                blurHandler={handlePasswordConfirmation}
                handleChange={setPassword}
              />
            </div>
            <div className="col-sm-6">
              <InputField
                label="Confirm Password"
                type="password"
                errorMessage={passwordNotmatch}
                blurHandler={handlePasswordConfirmation}
                handleChange={setConfirmPassword}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <TextArea
                label="Tell us about your self"
                blurHandler={(e: React.FormEvent<HTMLTextAreaElement>) => textAreaChangeHandler(e, setAboutUs)}
              />
            </div>
            <div className="col-sm-12 text-left d-flex flex-wrap">
              <CheckBox label="I agree to Square’s" handleChecked={setAccept} />
              &nbsp;
              <ItemLink label="Cookie" path="/cookie" />
              &nbsp;
              <span className="mb-0 fontFourteen">and</span>
              &nbsp;
              <ItemLink label="Privacy Policy" path="/privacypolicy">
                Privacy Policy
              </ItemLink>
            </div>
          </div>
          <div className={`${buttonStyle.loginBtnWrapper} ${LoginStyle.mT20}`}>
            <div>
              <Button label="Login" clickHandler={handleLogin} />
            </div>
            <div>
              <Button
                label="Signup"
                cssClass=" login-btn w-100"
                isDisabled={disable}
                clickHandler={handleSignup}
                showLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Singup;
