import React, { FunctionComponent } from 'react';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import Style from 'components/ProfileMenu/VoucherInfo/VoucherInfo.module.css';
import Input from 'components/controls/input/dashboardInput/dashboardInput';
import Button from 'components/controls/button/button';
import CheckBox from 'components/controls/checkbox/checkBox';

const Voucher: FunctionComponent = () => {
  const saveHandle = () => console.log();
  const checkHandle = () => console.log();
  return (
    <>
      <div className={Style.mainWrapper}>
        <div className={`d-flex justify-content-between ${Style.inputFields}`}>
          <Input type="text" cssClass={Style.input} label="Name" />
          <Input type="text" cssClass={Style.input} label="Street number & name" />
        </div>
        <div className={`d-flex justify-content-between ${Style.inputFields}`}>
          <Input type="text" cssClass={Style.input} label="Number" />
          <Input type="text" cssClass={Style.input} label="Apartment number" />
        </div>
        <div className={`d-flex justify-content-between ${Style.inputFields}`}>
          <Input type="text" cssClass={Style.input} label="City" />
          <Input type="text" cssClass={Style.input} label="State" />
        </div>
        <div className={`d-flex justify-content-between ${Style.inputFields}`}>
          <Input type="text" cssClass={Style.input} label="Zip Code" />
        </div>
        <div className={`${Style.inputFields}`}>
          <Input type="text" cssClass={Style.input} label="Address" />
        </div>
        <div className={`d-flex justify-content-between ${Style.inputFields}`}>
          <Input type="text" cssClass={Style.input} label="SIN#" />
          <Input type="text" cssClass={Style.input} label="GST#" />
        </div>
        <div className={`d-flex align-items-center ${Style.inputFields}`}>
          <Input type="text" cssClass={Style.input} label="UNION #" />
          <div className="ml-5">
            <div className="d-flex align-items-start justify-content-between">
              <CheckBox label="Non Union" handleChecked={checkHandle} />
              <CheckBox label="Full union " handleChecked={checkHandle} />
              <CheckBox label="Apprentice " handleChecked={checkHandle} />
            </div>
            <div>
              <CheckBox label="Extra union. " handleChecked={checkHandle} />
            </div>
          </div>
        </div>
        <div className="text-center">
          <Button icon={faSave} clickHandler={saveHandle} label="Save" cssClass={Style.saveButton} />
        </div>
      </div>
    </>
  );
};

export default Voucher;
