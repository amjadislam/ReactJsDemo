import { connect } from 'react-redux';
import CpToast from 'components/controls/Toast/CpToast';
import { ToastItem } from 'modules/general/general.type';
import { getToastList } from 'store/selector/general.selector';
import { removeToast } from 'store/actions/general.actions';

const mapStateToProps = (state: ToastItem) => {
  const toastList = getToastList(state);
  return {
    toastList,
  };
};

const mapStateToDispatch = {
  removeToast,
};

export default connect(mapStateToProps, mapStateToDispatch)(CpToast);
