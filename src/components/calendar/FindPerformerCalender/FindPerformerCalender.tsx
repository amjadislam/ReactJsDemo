import React, { FunctionComponent } from 'react';
import CalenderStyle from 'components/calendar/FindPerformerCalender/FindPerformerCalender.module.css';

interface FindPerformerCalenderProps {
  dayNo?: string;
  title?: string;
  isSelected: boolean;
  handleClick: () => void;
}
const FindPerformerCalender: FunctionComponent<FindPerformerCalenderProps> = (props: FindPerformerCalenderProps) => {
  const { dayNo, title, isSelected, handleClick } = props;

  return (
    <>
      <div
        className={isSelected ? `${CalenderStyle.active} ${CalenderStyle.calenderBox}` : CalenderStyle.calenderBox}
        onClick={handleClick}
        onKeyPress={handleClick}
        role="button"
        tabIndex={0}
      >
        <span className={isSelected ? `${CalenderStyle.active} ${CalenderStyle.monthTitle}` : CalenderStyle.monthTitle}>
          {title}
        </span>
        <p className={`mb-0 mt-1 ${isSelected ? CalenderStyle.active : ''} ${CalenderStyle.monthDate}`}>{dayNo}</p>
      </div>
    </>
  );
};

FindPerformerCalender.defaultProps = {
  dayNo: '',
  title: ',',
};

export default FindPerformerCalender;
