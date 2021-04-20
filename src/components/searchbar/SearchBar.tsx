import React, { FunctionComponent } from 'react';
import searchbarStyle from 'components/searchbar/SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchBarProps {
  placeholder?: string;
}
const SearchBar: FunctionComponent<SearchBarProps> = (props: SearchBarProps) => {
  const { placeholder } = props;
  return (
    <>
      <div className="form-group position-relative">
        <input type="text" name="searchbar" placeholder={placeholder} className={searchbarStyle.customInput} />
        <FontAwesomeIcon className={searchbarStyle.searchIcon} icon={faSearch} />
        <FontAwesomeIcon className={searchbarStyle.angleDownIcon} icon={faChevronDown} />
      </div>
    </>
  );
};
export default SearchBar;
