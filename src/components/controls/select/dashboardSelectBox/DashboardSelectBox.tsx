import React, { FunctionComponent } from 'react';
import { OptionList, Options } from 'modules/general/general.type';
import dashboardSelectStyle from 'components/controls/select/dashboardSelectBox/DashboardSelectBox.module.css';
import downArrowSvg from 'assets/svg/down-arrow.svg';

interface DashboardSelectBoxProps {
  data?: any;
  label?: string;
  value?: string;
  defaultValue?: string;
  handleSelect?: Function;
  optionData?: OptionList;
  optionType?: string;
  cssClass?: string;
}
const DashboardSelectBox: FunctionComponent<DashboardSelectBoxProps> = (props: DashboardSelectBoxProps) => {
  const { data, handleSelect, cssClass, label, value, defaultValue, optionData, optionType } = props;

  const selectedValue = (val: any) => {
    if (handleSelect) handleSelect(val);
  };

  const loadOptions = () => {
    if (data) {
      return data.map((x: any) => (
        <option key={x.id} value={x.name}>
          {x.name}
        </option>
      ));
    }
    if (optionData && optionType) {
      return optionData
        .filter((x: Options) => x.type === optionType)
        .map((x: Options) => (
          <option key={x.id} value={x.value}>
            {x.label}
          </option>
        ));
    }

    return '';
  };

  return (
    <>
      <div className={`form-group ${dashboardSelectStyle.dashboardSelectBoxWrapper}`}>
        <span className={cssClass}>{label}</span>
        <select
          value={value || ''}
          className={`${dashboardSelectStyle.customSelectBox} ${dashboardSelectStyle.defaultValueText} `}
          onChange={(event) => selectedValue(event.target.value)}
        >
          <option value="">{defaultValue}</option>
          {loadOptions()}
        </select>
        <img src={downArrowSvg} alt="" />
      </div>
    </>
  );
};
export default DashboardSelectBox;
