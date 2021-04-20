import React, { FunctionComponent, useEffect, useState } from 'react';
import selectStyle from 'components/controls/select/select.module.css';

interface InputProps {
  label: string;
  data: any;
  handleSelect?: Function;
}

const SelectOption: FunctionComponent<InputProps> = (props: InputProps) => {
  const { label, data, handleSelect } = props;

  const [optionSelect, setOptionSelect] = useState('');
  const [labelVal, setLabelVal] = useState(label);

  const selectedValue = (value: any) => {
    setOptionSelect(value);
    if (handleSelect) handleSelect(value);
  };

  useEffect(() => {
    setLabelVal(optionSelect ? label : '');
  }, [optionSelect]);

  return (
    <>
      <div className={selectStyle.floatingLabel}>
        <select
          // id="selectoption"
          aria-label={labelVal}
          className={selectStyle.floatingSelectBox}
          value={optionSelect}
          onChange={(event) => selectedValue(event.target.value)}
          onClick={() => {
            setLabelVal(label);
          }}
        >
          <option value="" />
          {data.map((x: any) => (
            <option key={x.id} value={x.name}>
              {x.name}
            </option>
          ))}
        </select>
        <span className={selectStyle.selectCountryLabel}>{label}</span>
      </div>
    </>
  );
};
export default SelectOption;
