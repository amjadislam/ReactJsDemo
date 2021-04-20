import React, { FunctionComponent } from 'react';
import Style from 'containers/MainContainer/MainContainer.module.css';

const MainContainer: FunctionComponent = (props) => {
  const { children } = props;
  return (
    <>
      <div className={Style.padding15}>{children}</div>
    </>
  );
};

export default MainContainer;
