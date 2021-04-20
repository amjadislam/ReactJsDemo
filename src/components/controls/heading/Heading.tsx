import React, { FunctionComponent } from 'react';
import Style from 'components/controls/heading/Heading.module.css';

interface HeadingProps {
  label: string;
  path?: string;
}
const Heading: FunctionComponent<HeadingProps> = (props: HeadingProps) => {
  const { label, path } = props;
  return (
    <h4 className="mb-0">
      {path ? <img src={path} alt="" className={`mr-2 ${Style.SvgIcon}`} /> : ''}
      {label}
    </h4>
  );
};

export default Heading;
