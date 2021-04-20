import React, { FunctionComponent } from 'react';
import buttonStyle from 'components/controls/button/button.module.css';

interface ButtonOutlineProps {
  cssClass: string;
  label: string;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const ButtonOutline: FunctionComponent<ButtonOutlineProps> = (props: ButtonOutlineProps) => {
  const { cssClass, label, clickHandler } = props;
  return (
    <>
      <button type="button" className={`btn ${cssClass}`} onClick={clickHandler}>
        {label}
      </button>
    </>
  );
};

export default ButtonOutline;
