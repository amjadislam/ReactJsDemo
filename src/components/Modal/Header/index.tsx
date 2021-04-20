import React, { FunctionComponent } from 'react';
import Style from 'components/Modal/Header/Modal.module.css';
import closeSvg from 'assets/svg/close.svg';

interface ModalHeaderProps {
  title: string;
  icon: any;
  handleClick: (event: React.FormEvent<HTMLDivElement>) => void;
}
const ModalHeader: FunctionComponent<ModalHeaderProps> = (props: ModalHeaderProps) => {
  const { title, handleClick, icon } = props;
  return (
    <>
      <div className={Style.modalHeader}>
        <img src={icon} alt="" className={`mr-2  ${Style.movieIcon}`} />
        <h3 className={`mb-0 ${Style.headerTitle}`}>{title}</h3>
        <div onClick={handleClick} className={Style.modelCloseIcon} tabIndex={0} role="button" onKeyPress={handleClick}>
          <img src={closeSvg} alt="" />
        </div>
      </div>
    </>
  );
};

export default ModalHeader;
