import React, { FunctionComponent } from 'react';
import Style from 'components/calendar/CalendarItem/CalendarItem.module.css';

interface CalendarItemProps {
  dayNo: string;
  title?: string;
  isSelected: boolean;
  handleClick: () => void;
}
const CalendarItem: FunctionComponent<CalendarItemProps> = (props) => {
  const { dayNo, title, isSelected, handleClick } = props;

  return (
    <>
      <div
        className={isSelected ? `${Style.itemWrapper} ${Style.border}` : Style.itemWrapper}
        onClick={handleClick}
        onKeyPress={handleClick}
        role="button"
        tabIndex={0}
      >
        <h5>{dayNo}</h5>
        <h6>{title}</h6>
      </div>
    </>
  );
};
export default CalendarItem;
