import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeTabs from 'components/TopNavBar/Tabs';
import Style from 'components/TopNavBar/TopNavBar.module.css';
import userSvg from 'assets/svg/profile.svg';
import payrollSvg from 'assets/svg/payroll.svg';
import voucherSvg from 'assets/svg/voucher.svg';
import settingSvg from 'assets/svg/setting.svg';
import logoutSvg from 'assets/svg/logout.svg';
import getItemFromLocalStorage from 'utils/getItemFromLocalStorage';
import { useDispatch } from 'react-redux';
import { callLogout } from 'store/actions/auth.actions';
import { useHistory } from 'react-router';
import Notification from 'components/TopNavBar/NotificationItem/index';
import { getNotificationsRequest } from 'store/actions/general.actions';
import searchSvg from 'assets/svg/search.svg';
import downArrowSvg from 'assets/svg/down-arrow.svg';
import bellSvg from 'assets/svg/Notification.svg';

const TopNavBar: FunctionComponent = () => {
  const [notificationsToggle, setNotificationsToggle] = useState(false);
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => setToggle(true);
  const toggleNotification = () => setNotificationsToggle(true);
  const handleNotificationClick = () => setNotificationsToggle(false);
  const handleClick = () => setToggle(false);
  const user = getItemFromLocalStorage('user');
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log('In Logout');
    dispatch(callLogout());
    history.push('/login');
  };
  useEffect(() => {
    dispatch(getNotificationsRequest());
  }, []);
  return (
    <div className={Style.header}>
      <div>
        <h1>
          <span>Casting</span>
          PAX
        </h1>
      </div>
      <div>
        <HomeTabs />
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="position-relative">
          <input type="text" className={Style.customSearchbar} placeholder="Find Performer" />
          <img src={searchSvg} className={Style.searchIcon} alt="" />
        </div>
        <div className={`ml-3 position-relative ${Style.notificationWrapper}`}>
          <div
            className="d-flex justify-content-between align-items-center"
            onClick={toggleNotification}
            onKeyPress={toggleNotification}
            role="button"
            tabIndex={0}
          >
            <div className="position-relative ml-3">
              <img src={bellSvg} alt="" className={Style.bellIcon} />
              <span className={Style.notificationCounter} />
            </div>
          </div>
          {notificationsToggle ? (
            <div>
              <div className={Style.notificationListing}>
                <div className={Style.notificationBody}>
                  <ul>
                    <li>
                      <Notification notifications={[]} />
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={Style.profileBgColor}
                onClick={handleNotificationClick}
                onKeyPress={handleNotificationClick}
                role="button"
                tabIndex={0}
              />
            </div>
          ) : (
            ''
          )}
        </div>
        <div className={`ml-3 position-relative ${Style.profileWrapper}`}>
          <div
            className="d-flex justify-content-between align-items-center"
            onClick={toggleMenu}
            onKeyPress={toggleMenu}
            role="button"
            tabIndex={0}
          >
            <img src={downArrowSvg} className={Style.arrowDown} alt="down-arrow" />
            <img src={user.profilePicUrl} alt="profile" />
          </div>
          {toggle ? (
            <div>
              <div className={Style.profileListing}>
                <div className={Style.profileHeader}>
                  <h3>{`${user.lastName} ${user.firstName}`}</h3>
                </div>

                <div className={Style.profileBody}>
                  <ul>
                    <li>
                      <Link to="/performer/home">
                        <img src={userSvg} alt="profile" />
                        My profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/performer/home">
                        <img src={payrollSvg} alt="payroll" />
                        Payroll
                      </Link>
                    </li>
                    <li>
                      <Link to="/performer/voucher_info">
                        <img src={voucherSvg} alt="voucher" />
                        Voucher
                      </Link>
                    </li>
                    <li>
                      <Link to="/performer/settings">
                        <img src={settingSvg} alt="cog" />
                        Settings
                      </Link>
                    </li>
                    <li>
                      <div onClick={handleLogout} onKeyPress={handleLogout} role="button" tabIndex={0}>
                        <img src={logoutSvg} alt="logout" />
                        Logout
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={Style.profileBgColor}
                onClick={handleClick}
                onKeyPress={handleClick}
                role="button"
                tabIndex={0}
              />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
