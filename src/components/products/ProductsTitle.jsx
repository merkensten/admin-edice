import React from 'react';

export const ProductsTitle = ({ openModal }) => {
  return (
    <div className="sm:flex pt-6 sm:items-center">
      <div className="sm:flex-auto">
        <p className="mt-2 text-sm text-gray-700">
          A list of all the products.
        </p>
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button
          onClick={openModal}
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};
