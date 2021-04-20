import React, { FunctionComponent } from 'react';

interface SVGProps {
  path: string;
  fill?: string;
  cssClass?: string;
}
const SVG: FunctionComponent<SVGProps> = (props: SVGProps) => {
  const { path, fill, cssClass } = props;
  return (
    <>
      <svg className={`mr-2 ${cssClass}`} width="1.25rem" height="16px" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={path} fill={fill} />
      </svg>
    </>
  );
};

export default SVG;
