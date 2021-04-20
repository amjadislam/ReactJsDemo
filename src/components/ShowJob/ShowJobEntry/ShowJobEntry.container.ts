import { connect } from 'react-redux';
import { Show } from 'modules/Show/show.types';
import { addJob, createJobBegin, setSelectedJob } from 'store/actions/show.actions';
import { setSelectedTab } from 'store/actions/auth.actions';
import { getEmailTemplates, getSelectedShowDate, getShowJob } from 'store/selector/show.selector';
import ShowRoleEntry from 'components/ShowJob/ShowJobEntry/ShowJobEntry';

const mapStateToProps = (state: Show) => {
  const selectedJob = getShowJob(state);
  const selectedDate = getSelectedShowDate(state);
  const templateList = getEmailTemplates(state);
  return { selectedJob, selectedDate, templateList };
};

const mapDispatchToProps = { createJobBegin, addJob, setSelectedTab, setSelectedJob };

export default connect(mapStateToProps, mapDispatchToProps)(ShowRoleEntry);
