// imports
import * as React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

// custom hooks
import { useAuth } from '../hooks/useAuth';

// helpers
import { RoutingPath } from '../routes/RoutingPath';

export const RequireAuth = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  return user === true ? (
    children
  ) : (
    <Navigate
      to={RoutingPath.Login}
      replace
      state={{ path: location.pathname }}
    />
  );
};
