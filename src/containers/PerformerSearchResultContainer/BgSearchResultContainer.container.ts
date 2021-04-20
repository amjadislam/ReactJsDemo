import { connect } from 'react-redux';
import { Show } from 'modules/Show/show.types';
import { getPerformerSearchResult } from 'store/selector/show.selector';
import BgSearchResultContainer from 'containers/PerformerSearchResultContainer/BgSearchResultContainer';

const mapStateToProps = (state: Show) => {
  const performerResult = getPerformerSearchResult(state);

  return { performerResult };
};

export default connect(mapStateToProps, null)(BgSearchResultContainer);
