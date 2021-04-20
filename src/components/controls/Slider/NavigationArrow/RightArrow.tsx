import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface NextArrowProps {
  style?: any;
  onClick?: (e: React.FormEvent<HTMLDivElement>) => void;
}
const NextArrow: FunctionComponent<NextArrowProps> = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className="next-arrow"
      style={{
        ...style,
        display: 'inline-block',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '18px',
        color: '#4B4D67',
        right: '-15px',
      }}
      onClick={onClick}
      onKeyPress={onClick}
      role="button"
      tabIndex={0}
    >
      <FontAwesomeIcon icon={faAngleRight} />
    </div>
  );
};

export default NextArrow;
