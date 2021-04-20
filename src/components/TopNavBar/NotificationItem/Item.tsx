import React, { FunctionComponent } from 'react';
import Style from 'components/TopNavBar/TopNavBar.module.css';
import calendarSvg from 'assets/svg/calendar.svg';
import prelimCallSvg from 'assets/svg/mobile-orange.svg';
import finalCallSvg from 'assets/svg/mobile.svg';
import settingBlueSvg from 'assets/svg/setting-blue.svg';
import notificationSvg from 'assets/svg/Notification.svg';
import squareCloseSvg from 'assets/svg/square-close.svg';
import squareCheckSvg from 'assets/svg/square-check.svg';
import squareCheckOrangeSvg from 'assets/svg/square-check-orange.svg';
import { NotificationList, Notification } from 'modules/general/general.type';

interface NotificationItemProps {
  notifications: NotificationList;
}
const NotificationItem: FunctionComponent<NotificationItemProps> = (props: NotificationItemProps) => {
  const { notifications } = props;

  const settingIcon = (type: any) => {
    switch (type) {
      case 'calender':
        return calendarSvg;
      case 'prelim':
        return prelimCallSvg;
      case 'final':
        return finalCallSvg;
      case 'setting':
        return settingBlueSvg;
      case 'update':
        return notificationSvg;
      case 'denied':
        return squareCloseSvg;
      case 'accepted':
        return squareCheckSvg;
      case 'pending':
        return squareCheckOrangeSvg;
      default:
        return settingBlueSvg;
    }
  };
  return (
    <>
      {notifications.map((notification: Notification) => (
        <a href="/#">
          <div className={`d-flex align-items-center ${Style.notificationItemWrapper}`}>
            <img src={settingIcon(`${notification.type}`)} alt="cog" />
            <div>
              <p className={`mb-0 ${Style.notificationTitle}`}>{notification.title}</p>
              <p className={`mb-0 ${Style.notificationDesc}`}>{notification.description}</p>
            </div>
          </div>
        </a>
      ))}
    </>
  );
};

export default NotificationItem;
