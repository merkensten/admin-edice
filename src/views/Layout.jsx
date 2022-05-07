import React from 'react';

// custom hooks
import { useAuth } from '../hooks/useAuth';

// components
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Layout = ({ children }) => {
  const { user } = useAuth();

  return (
    <>
      {user && <Navbar />}

      {children}
      {user && <Footer />}
    </>
  );
};
