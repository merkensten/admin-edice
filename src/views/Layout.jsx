import React from 'react';
import { UserContext } from '../context/UserContext';

// custom hooks
import useAuth from '../hooks/useAuth';

// components
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Layout = ({ children }) => {
  const { user, setUser } = React.useContext(UserContext);

  // kod för att i utveckling kunna toggla mellan logged in och logged out
  // React.useEffect(() => {
  //   setUser(false);
  // }, [setUser]);
  // ta bort denna senare

  return (
    <>
      {user && <Navbar />}

      {children}
      {user && <Footer />}
    </>
  );
};
