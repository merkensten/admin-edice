import React from 'react';
import { UserContext } from '../context/UserContext';

// components
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Layout = ({ children }) => {
  const { user, setUser } = React.useContext(UserContext);

  // kod för att i utveckling kunna toggla mellan logged in och logged out
  React.useEffect(() => {
    setUser(false);
  }, [setUser]);
  // ta bort denna senare

  return (
    <>
      {user && <Header />}

      {children}
      {user && <Footer />}
    </>
  );
};
