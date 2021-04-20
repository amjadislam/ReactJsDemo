import Landing from 'views/bgperformer/landing/index';
import CastingDirectorLanding from 'views/castingDirector/landing';
import MenuSetting from 'views/profileMenu/landing';

export default [
  {
    path: '/performer/home',
    component: Landing,
  },
  {
    path: '/director/home',
    component: CastingDirectorLanding,
  },
  {
    path: '/performer/settings',
    component: MenuSetting,
  },
  {
    path: '/performer/privacy',
    component: MenuSetting,
  },
  {
    path: '/performer/help_centre',
    component: MenuSetting,
  },
  {
    path: '/performer/days',
    component: MenuSetting,
  },
  {
    path: '/performer/voucher_info',
    component: MenuSetting,
  },
  {
    path: '/performer/residency_proof',
    component: MenuSetting,
  },
];
