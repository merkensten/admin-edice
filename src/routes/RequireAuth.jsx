// imports
import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

// context
import { UserContext } from '../context/UserContext';

// helpers
import { RoutingPath } from '../routes/RoutingPath';

export const RequireAuth = ({ children }) => {
  const { user } = React.useContext(UserContext);
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
