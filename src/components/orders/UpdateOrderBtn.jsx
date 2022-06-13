import React from 'react';

// saker att göra
// sätta dynamisk färg på knappen genom props
export const UpdateOrderBtn = ({ onClickHandler, btnText }) => {
  const orderValue = btnText.toLowerCase();
  return (
    <button
      onClick={() => onClickHandler(orderValue)}
      className={`inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-400 px-4 py-2 mt-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 sm:w-auto`}
    >
      {btnText}
    </button>
  );
};
