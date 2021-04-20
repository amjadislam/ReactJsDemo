import { RoleCode, BookingStatus } from 'modules/user/types';
import moment from 'moment';

export const getRoletitle = (role: RoleCode) => {
  switch (role) {
    case 'PERFORMER':
      return 'BG Performer';
    case 'COORDINATOR':
      return 'BG Coordinator';
    case 'DIRECTOR':
      return 'Casting Director';
    case 'PRODUCTION':
      return 'Production Director';
    default:
      return '';
  }
};

export const getRoleId = (role: RoleCode) => {
  switch (role) {
    case 'PERFORMER':
      return '60671874f9d2b991014963fa';
    case 'COORDINATOR':
      return '6067185ff9d2b991014963f9';
    case 'DIRECTOR':
      return '60671838f9d2b991014963f8';
    case 'PRODUCTION':
      return '606717f8f9d2b991014963f7';
    default:
      return -1;
  }
};

export const getHomePage = (type: RoleCode) => {
  switch (type) {
    case 'PERFORMER':
      return '/performer/home';
    case 'DIRECTOR':
      return '/director/home';
    default:
      return '/director/home';
  }
};

export const getBookingStatusColor = (status: BookingStatus) => {
  switch (status) {
    case 'pending':
      return '#f2994a';
    case 'notavailable':
      return '#333333';
    case 'booked':
      return '#eb5757';
    default:
      return '#fff';
  }
};

export const formateMonthDate = (date: string) => {
  if (date === null || date === undefined) return '';
  return moment(date).format('MMMM DD');
};

export const isValidFile = (file: File, type: string) => {
  const fileName = file.name;

  const exts = type === 'image' ? ['png', 'jpg', 'jpeg', 'gif'] : ['pdf'];

  if (fileName) {
    let getExt = fileName.split('.');
    getExt = getExt.reverse();

    if (!exts.includes(getExt[0].toLowerCase())) {
      return type === 'image' ? 'only image files are allowed' : 'only pdf files are allowed';
    }

    if (file.size / 1024 / 1024 > 2) {
      return 'max. 2MB file size allow';
    }

    return '';
  }
  return '';
};
