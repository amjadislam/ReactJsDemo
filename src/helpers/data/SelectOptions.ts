import { SelectOptionTypeList } from 'modules/PerformerList/list.types';
import ProfileImage6 from 'assets/images/exp6.png';
import ProfileImage7 from 'assets/images/exp7.png';
import ProfileImage8 from 'assets/images/exp8.png';
import ProfileImage9 from 'assets/images/exp9.png';
import ProfileImage10 from 'assets/images/exp10.png';
import ProfileImage11 from 'assets/images/exp11.png';
import ProfileImage12 from 'assets/images/exp12.png';
import ProfileImage13 from 'assets/images/exp13.png';
import ProfileImage14 from 'assets/images/exp14.png';
import ProfileImage15 from 'assets/images/exp15.png';
import { User } from 'modules/user/types';

export const ShowTypesOption = [
  { name: 'Film', id: 'Film' },
  { name: 'Series', id: 'Series' },
];

export const NumberOptions = (min: number, max: number, isShowQuotes?: boolean) => {
  const arr: SelectOptionTypeList = [];
  for (let i = min; i <= max; i += 1) {
    arr.push({ value: i.toString(), label: isShowQuotes ? `${i} "` : i.toString() });
  }
  return [...arr];
};

export const getHeightOptions = () => {
  const arr: SelectOptionTypeList = [];
  for (let i = 3; i <= 6; i += 1) {
    for (let j = 1; j <= 12; j += 1) {
      arr.push({ value: `${i}'${j}"`, label: `${i}'${j}"` });
    }
  }
  return [...arr];
};

export const getWeightOption = () => {
  const arr: SelectOptionTypeList = [];
  for (let i = 20; i <= 400; i += 1) {
    arr.push({ value: `${i} lbs`, label: `${i} lbs` });
  }
  return [...arr];
};

export const getWasitOption = () => {
  const arr: SelectOptionTypeList = [];
  arr.push({ value: 'N/A', label: 'N/A' });
  for (let i = 10; i <= 50; i += 1) {
    arr.push({ value: i.toString(), label: i.toString() });
  }
  return [...arr];
};

export const getNeckOptions = () => {
  const arr: SelectOptionTypeList = [];
  arr.push({ value: 'N/A', label: 'N/A' });
  arr.push({ value: 'S', label: 'S' });
  arr.push({ value: 'L', label: 'L' });
  arr.push({ value: 'XL', label: 'XL' });
  arr.push({ value: '2XL', label: '2XL' });
  arr.push({ value: '3XL', label: '3XL' });
  for (let i = 10; i <= 25; i += 0.5) {
    arr.push({ value: i.toString(), label: i.toString() });
  }
  return [...arr];
};

export const getJacketSizeOptions = () => {
  const arr: SelectOptionTypeList = [];
  const size = ['S', 'M', 'L'];
  for (let i = 30; i <= 60; i += 1) {
    for (let j = 0; j < size.length; j += 1) {
      arr.push({ value: `${i}${size[j]}`, label: `${i}${size[j]}` });
    }
  }
  return [...arr];
};

export const getInseamOptions = () => {
  const arr: SelectOptionTypeList = [];
  for (let i = 16; i <= 40; i += 0.5) {
    arr.push({ value: i.toString(), label: i.toString() });
  }
  return [...arr];
};

export const getSleeveOptions = () => {
  const arr: SelectOptionTypeList = [];
  for (let i = 12; i <= 38; i += 0.5) {
    arr.push({ value: i.toString(), label: i.toString() });
  }
  return [...arr];
};

export const getTextTemplates = () => {
  const arr: SelectOptionTypeList = [];
  for (let i = 1; i <= 2; i += 1) {
    arr.push({ value: i.toString(), label: `Template ${i}` });
  }
  return [...arr];
};

export const EmptyRoleData = {
  id: '-1',
  workingDayId: '',
  title: '',
  description: '',
  date: '',
  location: '',
  height: '',
  ethinicity: '',
  clothingOption: '',
  bodyRequirements: '',
  remarks: '',
  additionalInfo: '',
  createdBy: '',
  status: '',
  isActive: true,
  noOfPerformerRequired: 1,
  dates: '',
};

export const roleDummyList = [
  {
    id: '1',
    workingDayId: '1',
    title: 'Role 2',
    description: 'Role 2 for Road scene',
    date: '2021-03-04',
    location: 'Lahore',
    height: '5.2-6',
    ethinicity: 'Fair',
    clothingOption: 'Modern',
    bodyRequirements: 'New',
    remarks: '',
    additionalInfo: 'Will be share later',
    createdBy: '2021-03-04',
    status: 'public',
    isActive: true,
    noOfPerformerRequired: 10,
    dates: '2021-03-04',
    isSaveForLater: false,
  },
  {
    id: '2',
    workingDayId: '1',
    title: 'Role 3',
    description: 'Role 3 for Shopping mall scene',
    date: '2021-03-04',
    location: 'Lahore',
    height: '5.8-6.2',
    ethinicity: 'Fair',
    clothingOption: 'Bold',
    bodyRequirements: 'Smart',
    remarks: '',
    additionalInfo: 'Will be share later',
    createdBy: '2021-03-04',
    status: 'public',
    isActive: true,
    noOfPerformerRequired: 10,
    dates: '2021-03-04',
    isSaveForLater: false,
  },
];

export const DummyProfile: User = {
  id: '603dd2466033c320bcd34bdc',
  firstName: 'Mike',
  lastName: 'Stone',
  email: 'Mike@democode.com',
  name: 'Mike Stone',
  roles: 'PERFORMER',
  bgPerformer: {
    gender: 'F',
    dateOfBirth: '21',
    height: '5,8"',
    weight: '90 lbs',
    hair: 'Golden',
    eyeColor: 'Golden',
    skills: [
      {
        id: Math.random().toString(),
        name: 'Flight Attendant',
        skillId: '1',
        skillLevel: 'Professional',
      },
      {
        id: Math.random().toString(),
        name: 'Martial Art',
        skillId: '2',
        skillLevel: 'Advanced',
      },
      {
        id: Math.random().toString(),
        name: 'Theatre',
        skillId: '3',
        skillLevel: 'Above Average',
      },
    ],
    images: [
      {
        id: Math.random().toString(),
        imageType: 'image',
        folderId: '1',
        folderName: 'profile',
        image: ProfileImage6,
      },
      {
        id: Math.random().toString(),
        imageType: 'image',
        folderId: '1',
        folderName: 'profile',
        image: ProfileImage7,
      },
      {
        id: Math.random().toString(),
        imageType: 'image',
        folderId: '1',
        folderName: 'profile',
        image: ProfileImage8,
      },
      {
        id: Math.random().toString(),
        imageType: 'image',
        folderId: '1',
        folderName: 'profile',
        image: ProfileImage9,
      },
      {
        id: Math.random().toString(),
        imageType: 'image',
        folderId: '1',
        folderName: 'profile',
        image: ProfileImage10,
      },
      {
        id: Math.random().toString(),
        imageType: 'image',
        folderId: '1',
        folderName: 'profile',
        image: ProfileImage11,
      },
      {
        id: Math.random().toString(),
        imageType: 'image',
        folderId: '1',
        folderName: 'profile',
        image: ProfileImage12,
      },
      {
        id: Math.random().toString(),
        imageType: 'image',
        folderId: '1',
        folderName: 'profile',
        image: ProfileImage13,
      },
      {
        id: Math.random().toString(),
        imageType: 'image',
        folderId: '1',
        folderName: 'profile',
        image: ProfileImage14,
      },
      {
        id: Math.random().toString(),
        imageType: 'image',
        folderId: '1',
        folderName: 'profile',
        image: ProfileImage15,
      },
    ],
    bookingDates: [
      {
        id: '1',
        month: 'AUG',
        date: '27',
        type: '',
      },
      {
        id: '2',
        month: 'AUG',
        date: '27',
        type: '',
      },
      {
        id: '3',
        month: 'AUG',
        date: '27',
        type: '',
      },
    ],
  },
};
