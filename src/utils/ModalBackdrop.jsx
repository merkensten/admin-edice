import React from 'react';

export const ModalBackdrop = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 h-full w-full bg-black/60 overflow-auto">
      {children}
    </div>
  );
};
