import React, { FunctionComponent, useEffect } from 'react';
import ShowTopNavigation from 'components/ShowTopNavigation';
import ShowLeftNavigation from 'components/ShowLeftNavigation';
import MainContainer from 'containers/MainContainer';
import MyPerformerListContainer from 'containers/MyPerformerListContainer';
import LandingStyle from 'views/castingDirector/landing/landing.module.css';
import ShowRoleContainer from 'containers/ShowJobContainer/ShowJobContainer';
import TopBarCalendar from 'components/calendar/TopBarCalender/TopBarCalendar';
import TopNavBar from 'components/TopNavBar/TopNavBar';
import { Show, ShowTopCalendarTypeList } from 'modules/Show/show.types';
import FindPerformerContainer from 'containers/FindPerformerContainer';
import PerformerSearchResultContainer from 'containers/PerformerSearchResultContainer';

interface CastingDirectorLandingProps {
  selcetedHomeTab: string;
  selectedShow: Show;
  showCalendarDates: ShowTopCalendarTypeList;
  getSettingRequest: Function;
  setShowSelectedDate: Function;
}
const CastingDirectorLanding: FunctionComponent<CastingDirectorLandingProps> = (props) => {
  const { selcetedHomeTab, getSettingRequest, selectedShow, setShowSelectedDate, showCalendarDates } = props;

  useEffect(() => {
    getSettingRequest();
  }, []);

  return (
    <>
      <TopNavBar />
      <MainContainer>
        <ShowTopNavigation />
        <div className={LandingStyle.landingMainLayout}>
          <div className={`${LandingStyle.ladingLeftSide}`}>
            <ShowLeftNavigation />
            <MyPerformerListContainer />
          </div>
          <div className={`ml-3 ${LandingStyle.landingRightSide}`}>
            <div
              className={`${
                selcetedHomeTab === '2' ? LandingStyle.landingRightSidePerformer : LandingStyle.landingRightSideInner
              }`}
            >
              {selcetedHomeTab === '2' ? (
                <>
                  <FindPerformerContainer />
                  <PerformerSearchResultContainer />
                </>
              ) : (
                <div className="topBarCalendarWrapper">
                  <TopBarCalendar
                    showCalendarDates={showCalendarDates}
                    selectedShow={selectedShow}
                    setShowDate={setShowSelectedDate}
                  />
                  <ShowRoleContainer />
                </div>
              )}
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default CastingDirectorLanding;
