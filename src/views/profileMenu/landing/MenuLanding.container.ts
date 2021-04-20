import { connect } from 'react-redux';
import { User } from 'modules/user/types';
import Landing from 'views/profileMenu/landing/MenuLanding';

const mapStateToProps = (state: User) => {
  console.log(state);
};

export default connect(mapStateToProps, null)(Landing);
