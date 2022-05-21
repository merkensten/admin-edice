import * as React from 'react';

// custom hooks
import { useAuth } from '../hooks/useAuth';

// components
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export const Layout = ({ children }) => {
  const { user } = useAuth();

  return (
    <>
      {user && <Navbar />}
      <main>{children}</main>

      {user && <Footer />}
    </>
  );
};
