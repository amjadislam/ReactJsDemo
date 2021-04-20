import { RoleCode } from 'modules/user/types';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import getItemFromLocalStorage from 'utils/getItemFromLocalStorage';

const PrivateRoute = ({ component, path }: any) => {
  const user = getItemFromLocalStorage('user') || {};
  if (!user.firstName) {
    return <Redirect to={{ pathname: '/login' }} />;
  }

  const role = user.role as RoleCode;

  if (path.toUpperCase().includes(role)) return <Route path={path} exact component={component} />;

  return <Redirect to={{ pathname: `/${role}/home` }} />;
};

export default PrivateRoute;
