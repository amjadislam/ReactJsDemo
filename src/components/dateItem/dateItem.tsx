import React, { FunctionComponent } from 'react';
import dotsImage from 'assets/images/dots.png';
import Style from 'components/dateItem/dateItem.module.css';
import PopoverContainer from 'components/controls/Popover/PopoverContainer';
import DatePopup from 'components/bgPerformer/ExpandedSearch/DatePopup/DatePopup';

interface DateItemProps {
  title?: string;
  date?: string;
  cssClass?: string;
}
const DateItem: FunctionComponent<DateItemProps> = (props: DateItemProps) => {
  const { title, date, cssClass } = props;
  const itemComponent = () => <DatePopup title={title} date={date} cssClass={cssClass} />;
  return (
    <>
      <div className={`d-flex flex-wrap justify-content-start align-items-center ${cssClass}`}>
        <div className={`mr-4 ${Style.dateBoxWrapper}`}>
          <p className="mb-0">{title}</p>
          <h6 className="mb-0">{date}</h6>
        </div>
        <PopoverContainer itemComponent={itemComponent}>
          <div className={`mr-4 ${Style.dateBoxWrapper}`}>
            <img src={dotsImage} alt="" />
          </div>
        </PopoverContainer>
      </div>
    </>
  );
};

export default DateItem;
