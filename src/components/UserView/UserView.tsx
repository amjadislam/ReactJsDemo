import React, { FunctionComponent } from 'react';
import { User, SearchUserActionType } from 'modules/user/types';
import Style from 'components/UserView/UserView.module.css';
import dummyUser from 'assets/images/dummyUser.svg';
import plusSvg from 'assets/svg/plus.svg';
import closeSvg from 'assets/svg/close.svg';

interface UserViewProps {
  user: User;
  handleClick?: (e: React.FormEvent<HTMLSpanElement>) => void;
  icon?: SearchUserActionType;
}
const UserView: FunctionComponent<UserViewProps> = (props) => {
  const { user, handleClick, icon } = props;

  const addClickListener = () => {
    switch (icon) {
      case 'ADD':
        return <img src={plusSvg} alt="" />;
      case 'REMOVE':
        return <img src={closeSvg} alt="" />;
      default:
        return '';
    }
  };

  return (
    <div className={Style.userWrapper}>
      <div className="d-flex justify-content-start align-items-center">
        <img className="mr-2" src={dummyUser} alt="user" />
        <p>{user.firstName}</p>
      </div>
      <span onClick={handleClick} onKeyPress={handleClick} role="button" tabIndex={0}>
        {addClickListener()}
      </span>
    </div>
  );
};

export default UserView;
