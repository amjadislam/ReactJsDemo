import { connect } from 'react-redux';
import { Notification } from 'modules/general/general.type';
import { getNotificationList } from 'store/selector/general.selector';
import NotificationItem from 'components/TopNavBar/NotificationItem/Item';

const mapStateToProps = (state: Notification) => {
  const notifications = getNotificationList(state);
  console.log('Notifications Container : ', notifications);
  return {
    notifications,
  };
};

export default connect(mapStateToProps, null)(NotificationItem);
