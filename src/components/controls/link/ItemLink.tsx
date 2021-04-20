import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router';
import SignupStyle from 'views/signup/signup.module.css';

interface InputProps {
  label: string;
  path?: string;
}

const ItemLink: FunctionComponent<InputProps> = (props: InputProps) => {
  const { label, path } = props;

  const history = useHistory();

  const handleClick = () => {
    if (path) {
      history.push(path);
    }
  };

  return (
    <>
      <span
        className={`mb-0 ${SignupStyle.cookieText}`}
        onClick={handleClick}
        onKeyPress={handleClick}
        role="button"
        tabIndex={0}
      >
        {label}
      </span>
    </>
  );
};

export default ItemLink;
