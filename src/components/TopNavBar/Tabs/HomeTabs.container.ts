import { connect } from 'react-redux';
import { setSelectedTab } from 'store/actions/auth.actions';
import HomeTabs from 'components/TopNavBar/Tabs/HomeTabs';
import { selectedTab } from 'store/selector/auth.selector';
import { User } from 'modules/user/types';

const mapStateToProps = (state: User) => {
  const defaultTab = selectedTab(state);
  return {
    defaultTab,
  };
};

const mapDispatchToProps = {
  setSelectedTab,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeTabs);
