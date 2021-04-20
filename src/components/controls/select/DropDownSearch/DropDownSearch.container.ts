import { connect } from 'react-redux';
import { Options } from 'modules/general/general.type';
import { getOptions } from 'store/selector/general.selector';
import dashboardSelect from 'components/controls/select/DropDownSearch/DropDownSearch';

const mapStateToProps = (state: Options) => {
  const optionData = getOptions(state);

  return { optionData };
};

export default connect(mapStateToProps, null)(dashboardSelect);
