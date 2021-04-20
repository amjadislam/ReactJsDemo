import React, { FunctionComponent } from 'react';
import topHeader from 'components/topHeader/topHeader.module.css';

const Header: FunctionComponent = () => (
  <header>
    <div className={topHeader.topHeading}>
      <h1>
        <span>Casting</span>
        PAX
      </h1>
    </div>
  </header>
);

export default Header;
