// imports
import * as React from 'react';

export const Wrapper = ({ children }) => {
  return (
    <div className={` py-8 mx-auto max-w-7xl px-4 sm:py-12`}>{children}</div>
  );
};

export const NavbarWrapper = ({ children }) => {
  return (
    <div className={`py-4 mx-auto max-w-7xl px-4`}>{children}</div>
  );
};
