import * as React from 'react';

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const getSignedinData = () => {
      const signedIn = window.localStorage.getItem('admin-user-token');

      return signedIn;
    };
    const isSignedIn = getSignedinData();
    if (isSignedIn === 'undefined' || isSignedIn === null) {
      setUser(false);
    } else {
      setUser(true);
    }
  }, []);

  return (
    <>
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserProvider;
