export type Options = {
  id: string;
  type: string;
  value: string;
  label: string;
  description?: string;
  icon?: string;
};

export type CastingDirectorFilters = {
  id: string;
  title: string;
};

export type OptionList = Options[];

export type ToastItem = {
  id: string;
  title: string;
  description?: string;
  type: string;
};

export type SkillCategory = {
  id: string;
  name: string;
  parentCategory?: string;
  subCategories?: SkillCategoryList;
  isChecked?: boolean;
};

export type Notification = {
  id: string,
  title: string,
  description: string,
  type: string,
}

export type SkillCategoryList = SkillCategory[];

export type ToastItemList = ToastItem[];

export type NotificationList = Notification[];

export type EventItem = {
  id: number;
  title: string;
  allDay?: boolean;
  start: Date;
  end: Date;
  dateInNumber: number;
  description: string;
  status: string;
};

export type EventItemList = EventItem[];

export type OPTION_TYPE =
  | 'ethinicity'
  | 'eyes'
  | 'hair'
  | 'union'
  | 'gender'
  | 'bodytype'
  | 'vehicle'
  | 'skills'
  | 'location'
  | 'minheight'
  | 'maxheight'
  | 'minweight'
  | 'maxweight'
  | 'minage'
  | 'maxage'
  | 'waist'
  | 'maxwaist'
  | 'neck'
  | 'maxneck'
  | 'jacket'
  | 'maxjacket'
  | 'inseam'
  | 'maxinseam'
  | 'sleeve'
  | 'maxsleeve'
  | 'shoe'
  | 'maxshoe'
  | 'chest'
  | 'maxchest'
  | 'category'
  | 'skillLevel';
