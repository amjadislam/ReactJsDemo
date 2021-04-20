import React, { FunctionComponent } from 'react';
// import { OptionList } from 'modules/general/general.type';
import Style from 'components/controls/select/searchSelectBox/SearchSelectBox.module.css';

interface SearchSelectBoxProps {
  // data?: any;
  // label?: string;
  defaultValue?: string;
  // handleSelect?: Function;
  // optionData?: OptionList;
}
const SearchSelectBox: FunctionComponent<SearchSelectBoxProps> = (props: SearchSelectBoxProps) => {
  const { defaultValue } = props;
  return (
    <>
      <div className={`form-group mb-0 ${Style.SearchSelectWrapper}`}>
        <select className={`form-control ${Style.defaultValueText}`}>
          <option value="">{defaultValue}</option>
        </select>
      </div>
    </>
  );
};
export default SearchSelectBox;
