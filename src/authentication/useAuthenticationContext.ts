import { useContext } from 'react';
import { AuthenticationContext, AuthenticationContextValue } from 'authentication/context';

export default function useAuthenticationContext(): AuthenticationContextValue {
  const value = useContext(AuthenticationContext);

  if (!value) {
    throw new Error('No enclosing AuthenticationContext.Provider');
  }

  return value;
}
