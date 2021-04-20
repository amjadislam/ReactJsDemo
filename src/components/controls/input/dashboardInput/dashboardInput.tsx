import React, { FunctionComponent } from 'react';
import dashboardInputStyle from 'components/controls/input/dashboardInput/dashboardinput.module.css';

interface DashboardInputProps {
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  type?: string;
  value?: string;
  cssClass?: string;
  handleChange?: Function;
  inputChangeHandler?: (event: React.FormEvent<HTMLInputElement>) => void;
}
const DashboardInput: FunctionComponent<DashboardInputProps> = (props: DashboardInputProps) => {
  const { label, placeholder, value, type, handleChange, errorMessage, inputChangeHandler, cssClass } = props;
  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (handleChange) handleChange(event.currentTarget.value);
  };

  const loadInput = () => (
    <>
      <span>{label}</span>
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        className={dashboardInputStyle.dashboardInput}
        onChange={handleChange ? handleOnChange : inputChangeHandler}
      />
    </>
  );

  return (
    <>
      <div className={`form-group ${dashboardInputStyle.dashboardInputWrapper} ${cssClass}`}>
        {loadInput()}
        {errorMessage ? <span className={dashboardInputStyle.errorMessage}>{errorMessage}</span> : ''}
      </div>
    </>
  );
};

export default DashboardInput;
