import React, { FunctionComponent } from 'react';
import ProfileCalenderStyle from 'components/ProfileCalender/ProfileCalender.module.css';
import { BookingDate } from 'modules/user/types';

interface ProfileCalenderProps {
  date: BookingDate;
}
const ProfileCalender: FunctionComponent<ProfileCalenderProps> = (props: ProfileCalenderProps) => {
  const { date } = props;
  return (
    <div className={ProfileCalenderStyle.calenderBox}>
      <span className={ProfileCalenderStyle.monthTitle}>{date.month}</span>
      <p className={`mb-0 mt-0 ${ProfileCalenderStyle.monthDate}`}>{date.date}</p>
    </div>
  );
};

export default ProfileCalender;
