import React, { FunctionComponent } from 'react';
import dashboardTextareaStyle from 'components/controls/textArea/dashbaordTextarea/dashboardtextarea.module.css';

interface DashboardTextareaProps {
  placeholder?: string;
  errorMessage?: string;
  cssClass?: string;
  value?: string;
  inputChangeHandler?: (event: React.FormEvent<HTMLTextAreaElement>) => void;
  blurHandler?: (event: React.FormEvent<HTMLTextAreaElement>) => void;
}
const DashboardTextarea: FunctionComponent<DashboardTextareaProps> = (props: DashboardTextareaProps) => {
  const { inputChangeHandler, cssClass, value, blurHandler, errorMessage, placeholder } = props;
  return (
    <>
      <div className={`form-group ${cssClass}`}>
        <textarea
          value={value}
          className={dashboardTextareaStyle.dashboardTextarea}
          onChange={inputChangeHandler}
          onBlur={blurHandler}
          placeholder={placeholder}
        />
        {errorMessage ? <span className={dashboardTextareaStyle.errorMessage}>{errorMessage}</span> : ''}
      </div>
    </>
  );
};

export default DashboardTextarea;
