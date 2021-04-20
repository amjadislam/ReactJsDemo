import React, { FunctionComponent } from 'react';

interface CalendarStatusProps {
  cssClass: string;
  label?: string;
}
const CalendarStatus: FunctionComponent<CalendarStatusProps> = (props: CalendarStatusProps) => {
  const { cssClass, label } = props;
  return (
    <>
      <div className="mr-4 ml-2">
        <span className={`mr-2 mb-0 ${cssClass}`} />
        {label}
      </div>
    </>
  );
};
export default CalendarStatus;
