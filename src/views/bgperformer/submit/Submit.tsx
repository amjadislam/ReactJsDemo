import React, { FunctionComponent } from 'react';
import PerformerSubmission from 'containers/bgPerformer/Submission/Submission';
import JobView from 'components/JobView';

const Submit: FunctionComponent = () => (
  <>
    <PerformerSubmission />
    <JobView />
  </>
);

export default Submit;
