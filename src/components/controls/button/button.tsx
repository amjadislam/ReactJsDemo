import React, { FunctionComponent } from 'react';
import { Spinner } from 'react-bootstrap';
import buttonStyle from 'components/controls/button/button.module.css';
import { BUTTON_TYPE } from 'modules/user/types';

interface ButtonProps {
  cssClass?: string;
  label?: string;
  isDisabled?: boolean;
  icon?: any;
  rightIcon?: any;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  showLoading?: boolean;
  type?: BUTTON_TYPE;
}
const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const { cssClass, label, type, clickHandler, icon, rightIcon, isDisabled, showLoading } = props;
  const btnCss = () => {
    switch (type) {
      case 'default':
        return 'primary';
      case 'primary':
        return 'primary';
      case 'secondary':
        return 'secondary';
      case 'customSaveBtn':
        return buttonStyle.customSaveBtn;
      case 'customCancelBtn':
        return buttonStyle.customCancelBtn;
      default:
        return buttonStyle.customBtn;
    }
  };
  return (
    <>
      <button type="button" className={`btn ${btnCss()} ${cssClass}`} onClick={clickHandler} disabled={isDisabled}>
        {showLoading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : ''}
        {icon && <img src={icon} alt="" className="mr-2" />}
        {label}
        {rightIcon && <img src={rightIcon} alt="" className="ml-2" />}
      </button>
    </>
  );
};

export default Button;
