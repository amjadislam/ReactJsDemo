export interface User {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  phoneNo?: string;
  email: string;
  address?: string;
  password?: string;
  aboutUs?: string;
  city?: string;
  country?: string;
  profilePicUrl?: string;
  parentId?: number;
  experience?: number;
  roles?: string;
  unionNo?: string;
  accountReason?: string;
  resume?: string;
  bgPerformer?: BGPerformer;
  resumeFile?: File;
  profileFile?: File;
  isCompleted?: Boolean;
  role?: string;
  token?: string;
}

export type UserObj = User;

export type UserList = User[];

export interface BGPerformer {
  gender: string;
  dateOfBirth: string;
  height: string;
  weight: string;
  hair: string;
  eyeColor: string;
  documents?: BGperformerDocuments;
  bookingDates?: BookingDateList;
  images?: PerformerImageList;
  skills?: PerformerSkillList;
}

export type PerformerImage = {
  id: string;
  imageType: string;
  folderId: string;
  folderName: string;
  image: string;
};

export type PerformerImageList = PerformerImage[];

export type PerformerSkill = {
  id: string;
  name: string;
  skillId: string;
  skillLevel: string;
};

export type PerformerSkillList = PerformerSkill[];

export interface BGperformerDocuments {
  type: string;
  path: string;
  createdAt: string;
}

export type BookingDate = {
  id?: string;
  month: string;
  date: string;
  type?: string;
};

export type BookingDateList = BookingDate[];

export interface LOGIN_PARAMS {
  email: string;
  password: string;
}

export const ROLE_PRODUCTION = 'PRODUCTION' as RoleCode;
export const ROLE_DIRECTOR = 'DIRECTOR' as RoleCode;
export const ROLE_COORDINATOR = 'COORDINATOR' as RoleCode;
export const ROLE_PERFORMER = 'PERFORMER' as RoleCode;
export const ROLE_HMW = 'HMW';

export type RoleCode = 'PRODUCTION' | 'DIRECTOR' | 'COORDINATOR' | 'PERFORMER' | 'HMW';

export interface ProfileInputProps {
  handleClick: Function;
  isLoading: boolean;
  authError: string;
  uploadProfileImage?: Function;
  user: User;
}

export interface SignupProfile {
  user: User;
  step: number;
}

export type SearchUserActionType = 'ADD' | 'REMOVE' | 'NONE';

export type SELECTED_TAB = 'MATRIX' | 'CASTING_REQUEST' | 'FIND_PERFORMER' | 'TOOLS';

export type BUTTON_TYPE = 'default' | 'primary' | 'secondary' | 'customSaveBtn' | 'customCancelBtn';

export const BOOLEAN_TRUE = true;
export const BOOLEAN_FALSE = true;

export type BookingStatus = 'pending' | 'booked' | 'notavailable';
