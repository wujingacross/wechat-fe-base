import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

export const AuthRoute = inject('loginStore')(
  observer(({ loginStore: { isLogin }, children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isLogin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  })
);
