import { connect } from 'react-redux';
import { Show } from 'modules/Show/show.types';
import { getShowListingRequest, setSelectShow, showEditRequest } from 'store/actions/show.actions';
import { getSelectedShowId, getShowForEdit, getShowDetail, getShowLists } from 'store/selector/show.selector';
import ShowTopNavigation from 'components/ShowTopNavigation/ShowTopNavigation';

const mapStateToProps = (state: Show) => {
  const showList = getShowLists(state);
  const selectedShowId = getSelectedShowId(state);
  const showEdit = getShowForEdit(state);
  const showDetail = getShowDetail(state);
  return {
    showList,
    selectedShowId,
    showEdit,
    showDetail,
  };
};

const mapDispatchToProps = {
  setSelectedShow: setSelectShow,
  getShowListing: getShowListingRequest,
  showEditRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowTopNavigation);
