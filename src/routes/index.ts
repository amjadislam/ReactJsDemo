import Login from 'views/login';
import SignupCategory from 'views/signupcategory/SignupCategory';
import Singup from 'views/signup';
import SignupProfile from 'views/signup/profile';
import CastingDirector from 'views/castingDirector/landing';

export default [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/signupcategory',
    component: SignupCategory,
  },
  {
    path: '/profile/:type',
    component: SignupProfile,
  },
  {
    path: '/signup/:type',
    component: Singup,
  },
  {
    path: '/casting_director',
    component: CastingDirector,
  },
];
