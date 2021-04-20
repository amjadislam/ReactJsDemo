import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

interface PrevArrowProps {
  style?: any;
  onClick?: (e: React.FormEvent<HTMLDivElement>) => void;
}
const PrevArrow: FunctionComponent<PrevArrowProps> = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className="prev-arrow"
      style={{
        ...style,
        display: 'inline-block',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '18px',
        color: '#4B4D67',
        left: '-15px',
      }}
      onClick={onClick}
      onKeyPress={onClick}
      role="button"
      tabIndex={0}
    >
      <FontAwesomeIcon icon={faAngleLeft} />
    </div>
  );
};

export default PrevArrow;
