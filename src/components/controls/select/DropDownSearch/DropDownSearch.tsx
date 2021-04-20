import React, { FunctionComponent } from 'react';
import { OptionList, Options } from 'modules/general/general.type';
import Select, { components } from 'react-select';
import Professional from 'assets/images/diamond.png';
import Advanced from 'assets/images/star.png';
import Average from 'assets/images/wave.png';
import AboveAverage from 'assets/images/meter.png';

interface DashboardSelectBoxProps {
  data?: any;
  label?: string;
  value?: string;
  defaultValue?: string;
  handleSelect?: Function;
  optionData?: OptionList;
  optionType?: string;
  isMultiSelect?: boolean;
  cssClass?: string;
  showIcon?: boolean;
}
const DropDownSearch: FunctionComponent<DashboardSelectBoxProps> = (props: DashboardSelectBoxProps) => {
  const {
    data,
    handleSelect,
    label,
    cssClass,
    value,
    defaultValue,
    optionData,
    optionType,
    isMultiSelect,
    showIcon,
  } = props;

  const selectedValue = (val: any) => {
    if (handleSelect) handleSelect(val.value);
  };

  const loadOptions = () => {
    if (data) {
      return data;
    }

    if (optionData && optionType) {
      return optionData.filter((x: Options) => x.type === optionType);
    }

    return [];
  };

  const setValue = () => {
    if (isMultiSelect) {
      if (value !== undefined && value.length > 0) {
        const arr = value.split(',');
        arr.map((x) => ({ value: x, label: x }));
        return { arr };
      }
      return [];
    }
    if (value !== undefined && value.length > 0) return { value, label: value };
    if (defaultValue !== undefined && defaultValue.length > 0) return { value: defaultValue, label: defaultValue };
    return {};
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'professional':
        return Professional;
      case 'advanced':
        return Advanced;
      case 'average':
        return Average;
      case 'aboveaverage':
        return AboveAverage;
      default:
        return Professional;
    }
  };

  if (showIcon) {
    const { Option } = components;
    const CustomSelectOption = (cprops: any) => (
      <Option {...cprops}>
        <img src={`${getIcon(cprops.data.icon)}`} alt="" />
        {cprops.data.label}
      </Option>
    );

    const CustomSelectValue = (csprops: any) => (
      <div>
        {csprops.data.label && <img src={`${getIcon(csprops.data.icon)}`} alt="" />}
        {csprops.data.label}
      </div>
    );

    return (
      <>
        <div className="form-group">
          <span className={cssClass}>{label}</span>
          <Select
            value={setValue()}
            onChange={selectedValue}
            options={loadOptions()}
            components={{ Option: CustomSelectOption, SingleValue: CustomSelectValue }}
          />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="form-group">
        <span className={cssClass}>{label}</span>
        {isMultiSelect ? (
          <Select onChange={selectedValue} options={loadOptions()} isMulti />
        ) : (
          <Select value={setValue()} onChange={selectedValue} options={loadOptions()} />
        )}
      </div>
    </>
  );
};
export default DropDownSearch;
