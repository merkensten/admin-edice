import * as React from 'react';
import { UserContext } from '../context/UserContext';

export const useAuth = () => {
  const { user, setUser } = React.useContext(UserContext);

  return {
    user,
    login() {
      return new Promise((res) => {
        setUser(true);
        res();
      });
    },
    logout() {
      return new Promise((res) => {
        setUser(false);
        res();
      });
    },
  };
};
