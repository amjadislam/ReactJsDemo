import React, { FunctionComponent } from 'react';
import checkboxStyle from 'components/controls/checkbox/checkbox.module.css';

interface CheckBoxProps {
  label: string;
  handleChecked?: Function;
}
const CheckBox: FunctionComponent<CheckBoxProps> = (props: CheckBoxProps) => {
  const { label, handleChecked } = props;
  return (
    <>
      <div className={`custom-control custom-checkbox ${checkboxStyle.customCheckBoxWrapper}`}>
        <input
          type="checkbox"
          className={`custom-control-input ${checkboxStyle.customControlInput}`}
          id="customCheck"
          name="example1"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (handleChecked) handleChecked(e.target.checked);
          }}
        />
        <label className={`custom-control-label ${checkboxStyle.customControlLabel}`} htmlFor="customCheck">
          {label}
        </label>
      </div>
    </>
  );
};
export default CheckBox;
