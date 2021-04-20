import { connect } from 'react-redux';
import { Show } from 'modules/Show/show.types';
import { searchPerformerRequest, clearSearchResult } from 'store/actions/show.actions';
import { getShowJob, performerSearchLoading } from 'store/selector/show.selector';
import FindPerformerContainer from 'containers/FindPerformerContainer/FindPerformerContainer';

const mapStateToProps = (state: Show) => {
  const isLoading = performerSearchLoading(state);
  const selectedJob = getShowJob(state);
  return { isLoading, selectedJob };
};

const mapDispatchToProps = {
  searchPerformerRequest,
  clearSearchResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(FindPerformerContainer);
