import React, { FunctionComponent, useState } from 'react';
import Style from 'components/ProfileMenu/ResidencyDocs/Residency.module.css';
import Sort from 'components/Sort/Sort';
import DocsItem from 'components/ProfileMenu/ResidencyDocs/DocsItem';

const Residency: FunctionComponent = () => {
  const [isExpand, setIsExpand] = useState(false);
  console.log(isExpand, setIsExpand);
  return (
    <div className={Style.mainWrapper}>
      <Sort />
      <DocsItem />
    </div>
  );
};

export default Residency;
