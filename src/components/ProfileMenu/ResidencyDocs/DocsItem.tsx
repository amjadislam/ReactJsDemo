import React, { FunctionComponent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Style from 'components/ProfileMenu/ResidencyDocs/Residency.module.css';
import Button from 'components/controls/button/button';

const DocsItem: FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleDetail = () => console.log();
  const handleChange = () => console.log();
  const handleConfirm = () => console.log();
  const handleClick = () => setIsExpanded(!isExpanded);
  let icon = faChevronDown;
  const getIcon = () => {
    if (isExpanded) {
      icon = faChevronDown;
    } else {
      icon = faChevronUp;
    }
    return icon;
  };
  return (
    <div className="mb-3">
      <div className={`d-flex align-items-center justify-content-between ${Style.itemMainWrapper}`}>
        <p className={`mb-0 ${Style.itemDate}`}>June 28</p>
        <p className={`mb-0 ${Style.itemShowName}`}>Show Name</p>
        <p className={`mb-0 ${Style.itemRole}`}>Dancer</p>
        <div className={`d-flex align-items-center justify-content-between ${Style.itemIcons}`}>
          <FontAwesomeIcon icon={faExternalLinkAlt} onClick={handleDetail} />
          <FontAwesomeIcon icon={getIcon()} onClick={handleClick} />
        </div>
      </div>
      {isExpanded && (
        <div className={`d-flex align-items-center justify-content-between ${Style.itemExpendedWrapper}`}>
          <div className="d-flex align-items-center">
            <div className={Style.detailText}>
              <p className={`mb-0 ${Style.itemRole}`}>Est</p>
              <span className={`mb-0 ${Style.dollarSign}`}>$</span>
              <p className={`mb-0 ${Style.price}`}>120</p>
            </div>
            <a href="/#" className={Style.voucherLink}>
              View voucher
            </a>
          </div>
          <div className={Style.buttonWrapper}>
            <Button clickHandler={handleChange} label="X  Request a change" cssClass={Style.changeButton} />
            <Button clickHandler={handleConfirm} label="confirm work date" cssClass={`ml-3 ${Style.confirmButton}`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DocsItem;
