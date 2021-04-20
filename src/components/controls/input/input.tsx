import React, { FunctionComponent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import InputStyle from 'components/controls/input/input.module.css';
import TextErrorMessage from 'components/utils/errorMessage/TextErrorMessage';

interface InputProps {
  label: string;
  cssClass?: string;
  value?: string;
  type?: string;
  errorMessage?: string;
  handleChange?: Function;
  handleKeyDown?: Function;
  inputChangeHandler?: (event: React.FormEvent<HTMLInputElement>) => void;
  blurHandler?: (event: React.FormEvent<HTMLInputElement>) => void;
}
const InputField: FunctionComponent<InputProps> = (props: InputProps) => {
  const {
    label,
    cssClass,
    value,
    type,
    handleChange,
    blurHandler,
    errorMessage,
    inputChangeHandler,
    handleKeyDown,
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (handleChange) handleChange(event.currentTarget.value);
  };

  return (
    <>
      <div className={`${InputStyle.inputWrapper} ${InputStyle.inputGroup}`}>
        <input
          value={value}
          type={type && !showPassword ? type : 'text'}
          className={InputStyle.positionRelative + cssClass}
          required
          onChange={handleChange ? handleOnChange : inputChangeHandler}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (handleKeyDown) handleKeyDown(e);
          }}
          onBlur={blurHandler}
        />
        <span>{label}</span>
        {type === 'password' ? (
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={showPasswordHandler} />
        ) : (
          ''
        )}
        {errorMessage ? <TextErrorMessage message={errorMessage} /> : ''}
      </div>
    </>
  );
};

export default InputField;
