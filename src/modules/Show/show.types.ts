import { UserList } from 'modules/user/types';

export type Show = {
  id: string;
  title: string;
  type: ShowTypes;
  remarks?: string;
  additionalInfo?: string;
  episodes?: EpisodeList;
  showWorkingDays?: EpisodeDayList;
  users?: UserList;
  invitationList?: InvitationList;
};

export interface ShowCreateParams {
  title: string;
  type: ShowTypes;
  remarks?: string;
  additionalInfo?: string;
  userIds?: Array<string>;
  episodes: EpisodeList;
  showWorkingDays: EpisodeDayList;
  invitationList?: InvitationList;
}

export type Episode = {
  id: string;
  episodeNo: number;
  title?: string;
  date?: string;
  episodeDays: EpisodeDayList;
};

export type ShowWorkingDay = {
  id: string;
  episodeId?: string;
  showId?: string;
  title?: string;
  dayTitle?: string;
  date?: string;
};

export type ShowDayJob = {
  id: string;
  workingDayId?: string;
  title: string;
  description?: string;
  date: string;
  dateInNumber?: number;
  category?: string;
  location?: string;
  maxHeight?: string;
  minHeight?: string;
  weight?: string;
  maxWeight?: string;
  waist?: string;
  maxWaist?: string;
  neck?: string;
  maxNeck?: string;
  jacket?: string;
  maxJacket?: string;
  inseam?: string;
  maxInseam?: string;
  sleeve?: string;
  maxSleeve?: string;
  hair?: string;
  eyes?: string;
  age?: string;
  maxAge?: string;
  chest?: string;
  maxChest?: string;
  shoes?: string;
  maxShoes?: string;
  ethinicity?: string;
  clothingOption?: string;
  bodyRequirements?: string;
  remarks?: string;
  additionalInfo?: string;
  createdBy?: string;
  status?: string;
  isActive: boolean;
  noOfPerformerRequired: number;
  dates: string;
  isSaveForLater: boolean;
};

export type Invitation = {
  id: string;
  email: string;
  status: string;
};

export type InvitationList = Invitation[];

export type ShowDayJobList = ShowDayJob[];

export type EpisodeList = Episode[];

export type EpisodeDayList = ShowWorkingDay[];

export type ShowList = Show[];

export type EmailTemplate = {
  id: string;
  title: string;
  templateHtml: string;
  showId?: string;
  templateType: string;
  messageType?: string;
};

export type EmailTemplateList = EmailTemplate[];

export enum ShowTypes {
  FILM = 'Film',
  SERIES = 'Series',
  NONE = '',
}

export const SORT_FULL_UNION = 'fullUnion';
export const SORT_NO_UNION = 'noUnion';

export interface IRoleValidationError {
  title?: string;
  performer?: string;
  date?: string;
  location?: string;
}
export const roleValidationErrorObj: IRoleValidationError = {
  title: '',
  performer: '',
  date: '',
  location: '',
};

export type ShowTopCalendarType = {
  id: string;
  date: string;
  title: string;
  dayTitle: string;
};

export interface DateJobRequestParams {
  date: string;
  showId: string;
}

export type ShowTopCalendarTypeList = ShowTopCalendarType[];

export const newEpisode = (ttlEpisodes: number) => {
  const id: string = Math.random().toString();
  return {
    id,
    episodeNo: ttlEpisodes,
    title: `Episode  ${ttlEpisodes}`,
    date: '',
    episodeDays: [
      {
        id: Math.random().toString(),
        episodeId: id,
        title: 'Day 1',
        dayTitle: 'E1 D1',
        date: '',
      },
    ],
  };
};

export const newShowDate = (showId: string, ttlDates: number) => {
  const id: string = Math.random().toString();

  return {
    id,
    showId,
    title: `Day ${ttlDates + 1}`,
    date: '',
  };
};
