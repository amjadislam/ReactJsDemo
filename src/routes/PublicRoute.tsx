import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getHomePage } from 'helpers/utils';
import getItemFromLocalStorage from 'utils/getItemFromLocalStorage';

const PublicRoute = ({ component, path }: any) => {
  const user = getItemFromLocalStorage('user') || {};
  return user.firstName ? <Redirect to={getHomePage(user.roles)} /> : <Route path={path} exact component={component} />;
};

export default PublicRoute;
