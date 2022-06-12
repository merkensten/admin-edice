import * as React from 'react';
import { UserContext } from '../context/UserContext';
import { setLocalStorage } from '../helpers/LocalStorageHandler';

export const useAuth = () => {
  const { user, setUser } = React.useContext(UserContext);

  return {
    user,
    login(name, email, token, id) {
      return new Promise((res) => {
        setUser(true);
        setLocalStorage(name, email, token, id);
        res();
      });
    },
    logout(name, email, id, token) {
      return new Promise((res) => {
        setUser(false);
        setLocalStorage(name, email, token, id);
        res();
      });
    },
  };
};
