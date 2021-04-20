import React, { FunctionComponent } from 'react';
import ComponentStyle from 'components/utils/errorMessage/TextErrorMessage.module.css';

interface InputProps {
  message: string;
}

const TextErrorMessage: FunctionComponent<InputProps> = (props: InputProps) => {
  const { message } = props;
  return <h5 className={ComponentStyle.errorMessage}>{message}</h5>;
};

export default TextErrorMessage;
