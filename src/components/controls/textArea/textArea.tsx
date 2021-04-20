import React, { FunctionComponent } from 'react';
import textareaStyle from 'components/controls/textArea/textarea.module.css';

interface TextAreaProps {
  label: string;
  cssClass?: string;
  placeHolder?: string;
  errorMessage?: string;
  inputChangeHandler?: (event: React.FormEvent<HTMLTextAreaElement>) => void;
  blurHandler?: (event: React.FormEvent<HTMLTextAreaElement>) => void;
}
const TextArea: FunctionComponent<TextAreaProps> = (props: TextAreaProps) => {
  const { label, cssClass, inputChangeHandler, blurHandler, errorMessage, placeHolder } = props;
  return (
    <>
      <div className={`${textareaStyle.formGroup} ${textareaStyle.customTextarea}`}>
        <span>{label}</span>
        <textarea
          placeholder={placeHolder}
          className={cssClass}
          required
          onChange={inputChangeHandler}
          onBlur={blurHandler}
        />
        {errorMessage ? <span className={textareaStyle.errorMessage}>{errorMessage}</span> : ''}
      </div>
    </>
  );
};
export default TextArea;
