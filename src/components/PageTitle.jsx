import React from 'react';

export const PageTitle = ({ text }) => {
  return (
    <div className="py-10 border-b border-gray-200">
      <h3 className="text-3xl leading-6 font-medium text-gray-900">{text}</h3>
    </div>
  );
};
