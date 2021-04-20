import React, { FunctionComponent, useEffect } from 'react';
import { Show, ShowList, ShowTypes } from 'modules/Show/show.types';
import Button from 'components/controls/button/button';
import SliderWrapper from 'components/controls/Slider/SliderWrapper';
import CreateShow from 'components/CreateShow';
import ShowDetail from 'components/CreateShow/Detail/index';
import NavItem from 'components/ShowTopNavigation/NavItems/NavItem';
import Style from 'components/ShowTopNavigation/ShowTopNav.module.css';
import plusSvg from 'assets/svg/plus.svg';

interface ShowTopNavigationProps {
  showList: ShowList;
  selectedShowId: string;
  setSelectedShow: Function;
  getShowListing: Function;
  showEdit: Show;
  showDetail: Show;
  showEditRequest: Function;
}

const ShowTopNavigation: FunctionComponent<ShowTopNavigationProps> = (props) => {
  const { showList, selectedShowId, setSelectedShow, getShowListing, showEdit, showDetail, showEditRequest } = props;
  const showId = Math.random().toString();
  const showObj = {
    id: showId,
    title: '',
    type: ShowTypes.NONE,
    remarks: '',
    additionalInfo: '',
    seasons: [],
    showWorkingDays: [
      {
        id: Math.random().toString(),
        showId,
        title: 'Day 1',
        dayTitle: 'D1',
        date: '',
      },
    ],
    users: [],
  };
  useEffect(() => {
    getShowListing();
  }, []);

  const handleClick = (event: React.FormEvent<HTMLDivElement>) => {
    setSelectedShow(event.currentTarget.id);
  };

  const handleClickNew = () => {
    showEditRequest(showObj);
  };

  return (
    <div className={`main-top-slider ${Style.mainWrapper}`}>
      <div className={Style.navItemContainer}>
        <SliderWrapper slideToShow={7} goto={showList.length}>
          {showList.map((item: Show) => (
            <NavItem key={item.id} selected={item.id === selectedShowId} item={item} handleClick={handleClick} />
          ))}
        </SliderWrapper>
      </div>
      <span className="mb-0 pr-2">
        <Button cssClass={Style.plusItemBtn} clickHandler={handleClickNew} icon={plusSvg} />
      </span>

      {'title' in showEdit ? <CreateShow showData={showObj} closeDialog={showEditRequest} /> : ''}
      {'title' in showDetail ? <ShowDetail detailData={showDetail} /> : ''}
    </div>
  );
};

export default ShowTopNavigation;
