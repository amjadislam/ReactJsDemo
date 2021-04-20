import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import TopNavBar from 'components/TopNavBar/TopNavBar';
import Style from 'views/profileMenu/profileMenu.module.css';
import LeftNavigation from 'components/ProfileMenu/LeftNavigation/LeftNavigation';
import Setting from 'components/ProfileMenu/Settings/Setting';
import Voucher from 'components/ProfileMenu/VoucherInfo/VoucherInfo';
import Residency from 'components/ProfileMenu/ResidencyDocs/Residency';

const MenuLanding: FunctionComponent = () => {
  console.log();
  return (
    <div className={Style.mainWrapper}>
      <div className={Style.TopNavWrapper}>
        <TopNavBar />
      </div>
      <div className={`d-flex ${Style.bodyWrapper}`}>
        <LeftNavigation />
        <Switch>
          <Route exact path="/performer/settings">
            <Setting />
          </Route>
          <Route exact path="/performer/privacy">
            <Setting />
          </Route>
          <Route exact path="/performer/help_centre">
            <Setting />
          </Route>
          <Route path="/performer/days">
            <Setting />
          </Route>
          <Route path="/performer/voucher_info">
            <Voucher />
          </Route>
          <Route path="/performer/residency_proof">
            <Residency />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default MenuLanding;
