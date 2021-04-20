import React, { FunctionComponent, useEffect } from 'react';
import Style from 'views/bgperformer/bgPerformer.module.css';
import TopNavBar from 'components/TopNavBar/TopNavBar';
import Booking from 'containers/bgPerformer/Booking';
import Submit from 'views/bgperformer/submit';
import Profile from 'views/bgperformer/profile/index';

interface LandingProps {
  selcetedHomeTab: string;
  bookingRequestBegin: Function;
  getSettingRequest: Function;
}

const Landing: FunctionComponent<LandingProps> = (props) => {
  const { selcetedHomeTab, bookingRequestBegin, getSettingRequest } = props;

  useEffect(() => {
    bookingRequestBegin();
    getSettingRequest();
  }, []);

  const loadComponent = () => {
    switch (selcetedHomeTab) {
      case '2':
        return <Submit />;
      case '3':
        return <Profile />;
      default:
        return <Booking />;
    }
  };

  return (
    <>
      <div className={Style.bgPerformerWrapper}>
        <div className={Style.TopNavWrapper}>
          <TopNavBar />
        </div>
        {loadComponent()}
      </div>
    </>
  );
};
export default Landing;
