import React, { FunctionComponent, useState } from 'react';
import Style from 'components/Sort/Sort.module.css';
import DropDownSearch from 'components/controls/select/DropDownSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faChevronUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import { SORT_FULL_UNION, SORT_NO_UNION } from 'modules/Show/show.types';

const SortBy: FunctionComponent = () => {
  const [unionSorting, setUnionSorting] = useState('');
  console.log(unionSorting);
  return (
    <>
      <div className={`d-flex justify-content-between ${Style.sortWrapper}`}>
        <p className={`mb-0  ${Style.sortTitle}`}>Sort by</p>
        <div className="d-flex performerSearchWrapper searchSectionWrapper">
          <DropDownSearch defaultValue="Date" />
        </div>
        <div className="d-flex performerSearchWrapper searchSectionWrapper">
          <DropDownSearch defaultValue="Active" />
        </div>
        <div className={Style.searchbarIconsWrapper}>
          <FontAwesomeIcon icon={faBars} />
          <FontAwesomeIcon
            icon={faChevronUp}
            onClick={() => setUnionSorting(SORT_FULL_UNION)}
            onKeyPress={() => setUnionSorting(SORT_FULL_UNION)}
            role="button"
            tabIndex={0}
          />
          <FontAwesomeIcon
            icon={faChevronDown}
            onClick={() => setUnionSorting(SORT_NO_UNION)}
            onKeyPress={() => setUnionSorting(SORT_NO_UNION)}
            role="button"
            tabIndex={0}
          />
        </div>
        <div className={`form-group mb-0 position-relative ${Style.searchAreaWrapper}`}>
          <input type="text" placeholder="Search" className={`border-0 form-control ${Style.searchArea}`} />
          <FontAwesomeIcon icon={faSearch} className={Style.inputSearchIcon} />
        </div>
      </div>
    </>
  );
};

export default SortBy;
