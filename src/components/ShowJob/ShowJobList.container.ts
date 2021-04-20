import { connect } from 'react-redux';
import { Show } from 'modules/Show/show.types';
import { createEmptyShowJob, setSelectedJob } from 'store/actions/show.actions';
import { getShowJobList } from 'store/selector/show.selector';
import ShowJobList from 'components/ShowJob/ShowJobList';

const mapStateToProps = (state: Show) => {
  const showJobList = getShowJobList(state);
  return {
    showJobList,
  };
};
const mapDispatchToProps = {
  createEmptyShowJob,
  setSelectedJob,
};
export default connect(mapStateToProps, mapDispatchToProps)(ShowJobList);
