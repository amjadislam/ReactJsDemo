import React, { FunctionComponent } from 'react';
import wizardStyle from 'components/wizard/wizard.module.css';

const Wizard: FunctionComponent = () => (
  <>
    <div className={wizardStyle.wizardWrapper}>
      <ol className={wizardStyle.wizardStepper}>
        <li className={`${wizardStyle.stepperStep} ${wizardStyle.isActive}`}>
          <div className={wizardStyle.wizardBox}>
            <span className={wizardStyle.stepperContent} />
          </div>
        </li>
        <li className={`${wizardStyle.stepperStep} ${wizardStyle.isActive}`}>
          <div className={wizardStyle.wizardBox}>
            <span className={wizardStyle.stepperContent} />
          </div>
        </li>
      </ol>
    </div>
  </>
);

export default Wizard;
