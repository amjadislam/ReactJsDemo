import React, { ComponentType } from 'react';
import { AuthenticationContext, AuthenticationContextValue } from 'authentication/context';
import hoistStatics from 'hoist-non-react-statics';

type WithAuthenticationHOCProps = {
  authenticationContext: AuthenticationContextValue;
};

export default function withAuthenticationContext<P>(
  Component: ComponentType<P & WithAuthenticationHOCProps>,
): ComponentType<P> {
  const WithAuthenticationContext = (props: P) => (
    <AuthenticationContext.Consumer>
      {(value) => {
        if (!value) {
          throw new Error('No enclosing AuthenticationContext.Provider');
        }

        return <Component authenticationContext={value} {...props} />;
      }}
    </AuthenticationContext.Consumer>
  );

  WithAuthenticationContext.displayName = `withAuthenticationContext(${Component.displayName || Component.name})`;

  return hoistStatics(WithAuthenticationContext, Component);
}
