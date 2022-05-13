import React from 'react';
import axios from 'axios';

export const AddProductForm = () => {
  const postData = () => {
    const productMock = {
      title: 'Test from react admin page',
      category: 'Test',
      price: '99',
      description: 'Test from react admin page',
      material: 'plast',
      img: 'product_green_dice.jpg',
      quantity: 1,
      slug: 'test-from-react-admin-page',
    };

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/resource`, productMock)
      .then(function (response) {
        // handle success
        console.log('Success');
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
        console.log('done');
      });
  };
  return (
    <div className="isolate -space-y-px rounded-md shadow-sm">
      <form
        onSubmit={postData}
        className="relative border border-gray-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600"
      >
        <label
          htmlFor="name"
          className="block text-xs font-medium text-gray-900"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="Jane Doe"
        />
      </form>
      <div className="relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
        <label
          htmlFor="job-title"
          className="block text-xs font-medium text-gray-900"
        >
          Job Title
        </label>
        <input
          type="text"
          name="job-title"
          id="job-title"
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="Head of Tomfoolery"
        />
      </div>
    </div>
  );
};
