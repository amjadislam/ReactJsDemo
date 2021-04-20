import React, { FunctionComponent } from 'react';

interface DashboardCheckboxProps {
  label: string;
  handleChecked?: Function;
}
const DashboardCheckbox: FunctionComponent<DashboardCheckboxProps> = (props: DashboardCheckboxProps) => {
  const { label, handleChecked } = props;
  return (
    <>
      <div className="checkboxOverride">
        <input
          type="checkbox"
          name=""
          id="checkboxInputOverride"
          value="1"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (handleChecked) handleChecked(e.target.checked);
          }}
        />
        <label htmlFor="checkboxInputOverride">{label}</label>
      </div>
    </>
  );
};
export default DashboardCheckbox;
