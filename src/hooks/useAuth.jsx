import * as React from 'react';
import { UserContext } from '../context/UserContext';
import { setLocalStorage } from '../helpers/LocalStorageHandler';

export const useAuth = () => {
  const { user, setUser } = React.useContext(UserContext);

  return {
    user,
    login() {
      return new Promise((res) => {
        setUser(true);
        setLocalStorage('edice-user', 'tempuser');
        res();
      });
    },
    logout() {
      return new Promise((res) => {
        setUser(false);
        setLocalStorage('edice-user', null);
        res();
      });
    },
  };
};
