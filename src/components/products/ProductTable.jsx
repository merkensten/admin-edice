import * as React from 'react';

// hooks
import { GetData } from '../../hooks/useFetch';

export const ProductTable = () => {
  const {
    data: products,
    loading,
    error,
    errorMessage,
  } = GetData(`${process.env.REACT_APP_SERVER_URL}/resource/getall`);

  return (
    <div>
      {loading && <h2>Loading...</h2>}

      <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                Productname
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Category
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Description
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {products.length > 0 &&
              products.map((product) => (
                <tr key={product._id}>
                  <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                    {product.title}
                    <dl className="font-normal lg:hidden">
                      <dt className="sr-only">Category</dt>
                      <dd className="mt-1 truncate text-gray-700">
                        {product.category}
                      </dd>
                      <dt className="sr-only sm:hidden">Price</dt>
                      <dd className="mt-1 truncate text-gray-500 sm:hidden">
                        {product.price}
                      </dd>
                    </dl>
                  </td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                    {product.category}
                  </td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                    {product.price}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500">
                    {product.description}
                  </td>
                  <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      Edit<span className="sr-only">, {product.title}</span>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {error && (
        <div className="my-4">
          <p className="mt-2">Error occured while trying to fetch products</p>
          <p className="mt-2">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};
