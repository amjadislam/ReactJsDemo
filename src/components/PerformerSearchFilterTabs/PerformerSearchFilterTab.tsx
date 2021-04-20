import React, { FunctionComponent } from 'react';
import Style from 'components/PerformerSearchFilterTabs/PerformerSearchFilterTab.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { SearchFilterType } from 'modules/PerformerList/list.types';

interface PerformerSearchFilterTabProps {
  filter: SearchFilterType;
}
const PerformerSearchFilterTab: FunctionComponent<PerformerSearchFilterTabProps> = (props) => {
  const { filter } = props;
  return (
    <>
      <div className={`d-flex mr-2 mb-2 justify-content-between ${Style.searchTabWrapper}`}>
        <p className={`mb-0 mt-0 ${Style.tabTitle}`}>{filter.label}</p>
        <div className={Style.icon} onClick={filter.remove} role="button" tabIndex={0} onKeyPress={filter.remove}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>
    </>
  );
};

export default PerformerSearchFilterTab;
