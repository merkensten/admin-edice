import React from 'react';

export const ModalBackdrop = ({ children }) => {
  return (
    <div className="absolute top-0 bottom-0 left-0 h-full w-full bg-black/50 overflow-auto">
      {children}
    </div>
  );
};
