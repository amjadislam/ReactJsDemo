import { connect } from 'react-redux';
import Profile from 'views/bgperformer/profile/Profile';
import { SkillCategory } from 'modules/general/general.type';
import { getProfile } from 'store/selector/performer.selector';
import { performerProfileBegin } from 'store/actions/performer.actions';

const mapStateToProps = (state: SkillCategory) => {
  const profileData = getProfile(state);
  return { profileData };
};

const mapDispatchToProps = {
  performerProfileBegin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
