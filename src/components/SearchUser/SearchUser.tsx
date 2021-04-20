import React, { FunctionComponent, useState } from 'react';
import Style from 'components/SearchUser/SearchUser.module.css';
import { debounce } from 'lodash';
import { UserList, User } from 'modules/user/types';
import userApi from 'store/services/user.services';
import { checkEmail } from 'utils/FormValidation';
import UserView from 'components/UserView/UserView';
import Button from 'components/controls/button/button';
import DashboardInput from 'components/controls/input/dashboardInput/dashboardInput';
import ApiResponse from 'modules/response/response.types';

interface SearchUserProps {
  label: string;
  addUserInList: Function;
  prevList: UserList;
  handleInvitation?: Function;
}

const SearchUser: FunctionComponent<SearchUserProps> = (props) => {
  const { label, addUserInList, prevList, handleInvitation } = props;
  const inititalList: UserList = [];
  const [searchResult, setSearchResult] = useState(inititalList);
  const [searchText, setSearchText] = useState('');

  const searchName = debounce((text: string) => fetchResult(text), 500);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    searchName(event.currentTarget.value);
  };

  const handleAddUser = (event: React.FormEvent<HTMLSpanElement>, user: User) => {
    const index = prevList.findIndex((u: User) => u.id === user.id);
    if (index === -1) {
      addUserInList([...prevList, user]);
    }
  };

  const fetchResult = (text: string) => {
    setSearchText(text);
    if (text.length === 0) {
      setSearchResult([]);
      return;
    }
    try {
      userApi.searchUser({ searchText: text }).then((res: ApiResponse) => {
        setSearchResult(res.data);
      });
    } catch (error) {
      console.log('Error!', error.message);
    }
  };

  const showSearchResult = () => {
    if (searchText.length > 0 && searchResult.length === 0) {
      return (
        <div className={Style.searchWrapper}>
          <p>No user find</p>
          {checkEmail(searchText).length === 0 && handleInvitation ? (
            <Button
              label="Send Invitation"
              clickHandler={() => {
                handleInvitation(searchText);
                setSearchText('');
              }}
            />
          ) : (
            ''
          )}
        </div>
      );
    }
    if (searchResult.length > 0) {
      return (
        <div className={Style.searchWrapper}>
          {searchResult.map((user) => (
            <UserView
              key={user.id}
              user={user}
              icon="ADD"
              handleClick={(e: React.FormEvent<HTMLSpanElement>) => {
                handleAddUser(e, user);
              }}
            />
          ))}
        </div>
      );
    }

    return '';
  };

  return (
    <div>
      <DashboardInput placeholder={label} inputChangeHandler={handleChange} />
      {showSearchResult()}
    </div>
  );
};

export default SearchUser;
