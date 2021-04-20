import { connect } from 'react-redux';
import Login from 'views/login/Login';
import { getLoginRequest, resetErrorMesage } from 'store/actions/auth.actions';

const mapDispatchToProps = { loginRequest: getLoginRequest, resetErrorMesage };

export default connect(null, mapDispatchToProps)(Login);
