import { connect } from 'react-redux';
import { User } from 'modules/user/types';
import { selectedTab } from 'store/selector/auth.selector';
import Landing from 'views/bgperformer/landing/Landing';
import { bookingRequestBegin } from 'store/actions/job.actions';
import { getSettingRequest } from 'store/actions/general.actions';

const mapStateToProps = (state: User) => {
  const selcetedHomeTab = selectedTab(state);

  return {
    selcetedHomeTab,
  };
};

const mapDispatchToProps = {
  bookingRequestBegin,
  getSettingRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
