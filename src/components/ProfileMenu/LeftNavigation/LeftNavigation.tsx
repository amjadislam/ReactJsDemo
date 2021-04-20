import React, { FunctionComponent } from 'react';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Style from 'components/ProfileMenu/LeftNavigation/LeftNavigation.module.css';
import settingImage from 'assets/images/left-nav/setting.png';
import privacyImage from 'assets/images/left-nav/privacy.png';
import helpImage from 'assets/images/left-nav/help.png';
import infoImage from 'assets/images/left-nav/info.png';
import voucherImage from 'assets/images/left-nav/voucher.png';
import daysImage from 'assets/images/left-nav/days.png';
import Button from 'components/controls/button/button';
import { useDispatch } from 'react-redux';
import { callLogout } from 'store/actions/auth.actions';
import { useHistory } from 'react-router';
import SVG from 'components/controls/svg/SVG';

const LeftNavigation: FunctionComponent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    console.log('In Logout');
    dispatch(callLogout());
    history.push('/login');
  };
  const active = true;
  return (
    <div className={`${Style.leftNavigationWrapper}`}>
      <div className={`${Style.itemWrapper}`}>
        <div className={`d-flex ${active && 'active'} ${Style.item}`}>
          <img src={settingImage} alt="" />
          <SVG path={settingImage} fill="#49D360" cssClass="" />
          <Link to="/performer/settings" className={Style.itemTitle}>
            Settings
          </Link>
        </div>
        <div className={`d-flex ${active && 'active'} ${Style.item}`}>
          <img src={privacyImage} alt="" />
          <SVG path={privacyImage} cssClass="" />
          <Link to="/performer/privacy" className={Style.itemTitle}>
            Privacy
          </Link>
        </div>
        <div className={`d-flex ${active && 'active'} ${Style.item}`}>
          <img src={helpImage} alt="" />
          <SVG path={helpImage} cssClass="" />
          <Link to="/performer/help_centre" className={Style.itemTitle}>
            Help Centre
          </Link>
        </div>
        <div>
          <p className={`mb-0 ${Style.payRoll}`}>Payroll</p>
        </div>
        <div className={`d-flex ${active && 'active'} ${Style.item}`}>
          <img src={infoImage} alt="" />
          <SVG path={infoImage} cssClass="" />
          <Link to="/performer/days" className={Style.itemTitle}>
            days worked
          </Link>
        </div>
        <div className={`d-flex ${active && 'active'} ${Style.item}`}>
          <img src={voucherImage} alt="" />
          <SVG path={voucherImage} cssClass="" />
          <Link to="/performer/voucher_info" className={Style.itemTitle}>
            voucher info
          </Link>
        </div>
        <div className={`d-flex ${active && 'active'} ${Style.item}`}>
          <img src={daysImage} alt="" />
          <SVG path={daysImage} cssClass="" />
          <Link to="/performer/residency_proof" className={Style.itemTitle}>
            proof of residency docs
          </Link>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <Button icon={faSignOutAlt} cssClass={Style.button} label="Logout" clickHandler={handleLogout} />
        </div>
      </div>
    </div>
  );
};

export default LeftNavigation;
