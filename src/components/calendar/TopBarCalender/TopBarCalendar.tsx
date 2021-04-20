import moment from 'moment-timezone';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Show, ShowTopCalendarTypeList, DateJobRequestParams } from 'modules/Show/show.types';
import SliderWrapper from 'components/controls/Slider/SliderWrapper';
import CalendarItem from 'components/calendar/CalendarItem/CalendarItem';

interface TopBarCalendarProps {
  showCalendarDates: ShowTopCalendarTypeList;
  selectedShow?: Show;
  setShowDate?: Function;
}
const TopBarCalendar: FunctionComponent<TopBarCalendarProps> = (props) => {
  const { selectedShow, setShowDate, showCalendarDates } = props;
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));

  useEffect(() => {
    if (selectedShow?.id) {
      const requestParams: DateJobRequestParams = {
        date: selectedDate,
        showId: selectedShow?.id || '',
      };
      if (setShowDate) setShowDate(requestParams);
    }
  }, [selectedDate]);

  return (
    <>
      <SliderWrapper slideToShow={11}>
        {showCalendarDates.map((item) => (
          <CalendarItem
            key={item.id}
            isSelected={selectedDate === item.date}
            title={item.title}
            dayNo={item.dayTitle}
            handleClick={() => {
              setSelectedDate(item.date);
            }}
          />
        ))}
      </SliderWrapper>
    </>
  );
};

export default TopBarCalendar;
