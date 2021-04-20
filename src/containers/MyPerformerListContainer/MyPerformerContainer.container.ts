import { connect } from 'react-redux';
import { PerformerList } from 'modules/PerformerList/list.types';
import { createMyPerformerListRequest, getMyPerformerListRequest } from 'store/actions/myPerformer.actions';
import { getMyPerformerList, getSelectedPerformer } from 'store/selector/myPerformer.selector';
import MyPerformerContainer from 'containers/MyPerformerListContainer/MyPerformerContainer';

const mapStateToProps = (state: PerformerList) => {
  const performerList = getMyPerformerList(state);
  const selectedPerformer = getSelectedPerformer(state);
  return {
    performerList,
    selectedPerformer,
  };
};

const mapDispatchToAction = {
  getMyPerformerListRequest,
  createMyPerformerListRequest,
};

export default connect(mapStateToProps, mapDispatchToAction)(MyPerformerContainer);
