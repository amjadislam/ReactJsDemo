import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import getItemFromLocalStorage from 'utils/getItemFromLocalStorage';

const CastingDirectorRoute = ({ component, path }: any) => {
  const user = getItemFromLocalStorage('user') || {};
  const castingDirector = () => {
    return <Route path={path} exact component={component} />;
  };
  return user.firstName ? castingDirector() : <Redirect to={{ pathname: '/login' }} />;
};

export default CastingDirectorRoute;
