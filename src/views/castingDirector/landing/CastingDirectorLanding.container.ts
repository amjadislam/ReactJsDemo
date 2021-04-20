import { connect } from 'react-redux';
import { User } from 'modules/user/types';
import { selectedTab } from 'store/selector/auth.selector';
import CastingDirectorLanding from 'views/castingDirector/landing/CastingDirectorLanding';
import { getSettingRequest } from 'store/actions/general.actions';
import { getSelectedShow, getShowCalendarDates } from 'store/selector/show.selector';
import { setShowSelectedDate } from 'store/actions/show.actions';

const mapStateToProps = (state: User) => {
  const selcetedHomeTab = selectedTab(state);
  const selectedShow = getSelectedShow(state);
  const showCalendarDates = getShowCalendarDates(state);

  return {
    selcetedHomeTab,
    selectedShow,
    showCalendarDates,
  };
};

const mapDispatchToProps = {
  getSettingRequest,
  setShowSelectedDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(CastingDirectorLanding);
