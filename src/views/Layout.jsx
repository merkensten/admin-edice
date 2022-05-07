import React from 'react';

// custom hooks
import { useAuth } from '../hooks/useAuth';

// components
// import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { NavbarTest } from '../components/NavbarTest';

export const Layout = ({ children }) => {
  const { user } = useAuth();

  return (
    <>
      {/* {user && <Navbar />} */}
      {user && <NavbarTest />}
      <main>{children}</main>

      {user && <Footer />}
    </>
  );
};
