import React, { FunctionComponent } from 'react';
import Style from 'components/ProfileMenu/Settings/Setting.module.css';
import Input from 'components/controls/input/dashboardInput/dashboardInput';
import DropDown from 'components/controls/select/dashboardSelectBox/index';
import Button from 'components/controls/button/button';
import Group1 from 'assets/images/Group1.png';
import Group2 from 'assets/images/Group2.png';
import Group3 from 'assets/images/Group3.png';

const Setting: FunctionComponent = () => {
  const changeHandle = () => console.log();
  const saveHandle = () => console.log();
  const deleteHandle = () => console.log();
  return (
    <div className={Style.settingWrapper}>
      <div className={Style.passwordWrapper}>
        <p className={`mb-0 ${Style.settingHeading}`}>Change Password</p>
        <div className={Style.password}>
          <Input placeholder="Private" type="password" cssClass={Style.input} label="Old password" />
        </div>
        <div className={`d-flex align-items-center ${Style.password}`}>
          <Input placeholder="Private" type="password" cssClass={Style.input} label="New password" />
          <Input placeholder="Private" type="password" cssClass={Style.input} label="Confirm new password" />
          <Button clickHandler={changeHandle} label="Change password" cssClass={Style.passwordButton} />
        </div>
      </div>
      <div className={Style.profileWrapper}>
        <p className={`mb-0 ${Style.settingHeading}`}>Profile Management</p>
        <div className={`d-flex align-items-center justify-content-start ${Style.password}`}>
          <DropDown label="Edit your public profile" defaultValue="Private" />
          <p className={`mb-0 ${Style.profileDetailDesc}`}>
            We’ll occasionally send updates about your account to this inbox.
          </p>
        </div>
        <div className={`${Style.password}`}>
          <DropDown label="Who can see my profile details" defaultValue="Only users…" />
        </div>
        <div className="d-flex align-items-center justify-content-start">
          <p className={`mb-0 ${Style.profileDetailTitle}`}>Change your profile details</p>
          <p className={`mb-0 ${Style.profileDetailDesc}`}>
            We’ll occasionally send updates about your account to this inbox.
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-start mt-1">
          <p className={`mb-0 ${Style.profileCEdit}`}>CEdit, change and adjust what people see on your profile.</p>
          <p className={`mb-0 ${Style.purchaseHistory}`}>
            <a href="www.google.com">Edit profile</a>
          </p>
        </div>
      </div>
      <div className={`${Style.profileWrapper}`}>
        <div className="d-flex justify-content-between">
          <img src={Group1} alt="group1" />
          <img src={Group2} alt="group2" />
          <img src={Group3} alt="group3" />
        </div>
        <div>
          <p className={`mb-0 ${Style.purchaseHistory}`}>View Purchase history</p>
          <p className={`mb-0 ${Style.purchaseHistory}`}>
            <a href="www.google.com">View Purchase history</a>
          </p>
          <div className="text-right">
            <Button clickHandler={saveHandle} label="save" cssClass={`${Style.saveButton}`} />
          </div>
        </div>
      </div>
      <div className={Style.accountWrapper}>
        <p className={`mb-0 ${Style.accountHeading}`}>Closing your account</p>
        <div className="d-flex align-items-center justify-content-between">
          <p className={`mb-0 ${Style.accountDetail}`}>
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <Button clickHandler={deleteHandle} label="Delete" cssClass={`${Style.deleteButton}`} />
        </div>
      </div>
    </div>
  );
};

export default Setting;
