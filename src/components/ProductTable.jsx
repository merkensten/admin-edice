import React from 'react';

// hooks
import { useFetch } from '../hooks/useFetch';

export const ProductTable = () => {
  const [products, setProducts] = React.useState([]);
  const [fetchError, setFetchError] = React.useState(null);
  const { data, loading, error } = useFetch(
    process.env.REACT_APP_SERVER_URL + '/resource/getall'
  );

  React.useEffect(() => {
    if (data) {
      setProducts(data);
    }

    if (error) {
      setFetchError(error);
    }
  }, [data, error]);

  console.log(data);
  return (
    <div>
      <div className="sm:flex pt-6 sm:items-center">
        <div className="sm:flex-auto">
          <p className="mt-2 text-sm text-gray-700">
            A list of all the products.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Add Product
          </button>
        </div>
      </div>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>Error occured while trying to fetch products</p>}

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
            {!error && products.map((product) => (
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
                  <a href="/" className="text-indigo-600 hover:text-indigo-900">
                    Edit<span className="sr-only">, {product.title}</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
