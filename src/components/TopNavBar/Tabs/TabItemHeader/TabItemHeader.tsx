import React, { FunctionComponent } from 'react';

interface TabItemHeaderProps {
  label: string;
  path: string;
}
const TabItemHeader: FunctionComponent<TabItemHeaderProps> = (props: TabItemHeaderProps) => {
  const { label, path } = props;
  return (
    <>
      <span className="mb-0">
        <img src={path} alt="" />
        {label}
      </span>
    </>
  );
};

export default TabItemHeader;
