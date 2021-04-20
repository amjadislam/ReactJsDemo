import React, { FunctionComponent } from 'react';
import PerformerFullProfile from 'components/PerformerProfile/PerformerFullProfile';
import { UserList } from 'modules/user/types';

interface PerformerSearchResultProps {
  performerResult?: UserList;
}
const BgSearchResultContainer: FunctionComponent<PerformerSearchResultProps> = (props: PerformerSearchResultProps) => {
  const { performerResult } = props;

  return (
    <>
      {performerResult && performerResult.length > 0
        ? performerResult.map((profile) => <PerformerFullProfile key={profile.id} profile={profile} />)
        : ''}
    </>
  );
};

export default BgSearchResultContainer;
