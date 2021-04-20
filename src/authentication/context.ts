import React from 'react';

export type AuthenticationContextValue = {
  logout: VoidFunction;
  userType: LoginType;
};

export type LoginType = {
  PERFORMER: string;
  PRODUCTION: string;
  DIRECTOR: string;
  COORDINATOR: string;
};

export const AuthenticationContext = React.createContext<AuthenticationContextValue | undefined>(undefined);

AuthenticationContext.displayName = 'AuthenticationContext';
