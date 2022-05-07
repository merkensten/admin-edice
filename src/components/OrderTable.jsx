/* This example requires Tailwind CSS v2.0+ */
const orders = [
  {
    name: 'John Doe',
    orderId: 'demlmdlwe21980swqlml',
    products: [
      {
        id: 'demlmdlwe21980swqlml',
        name: 'Product 1',
      },
      {
        id: 'cdemlmdlwe21980swqwqlml',
        name: 'Product 2',
      },
      {
        id: 'ademlmdlwe21980swqwqqqlml',
        name: 'Product 3',
      },
    ],
    amount: '149',
    status: 'Pending',
  },
  {
    name: 'John Doe',
    orderId: 'demlmdlwe21980swqlml',
    products: [
      {
        id: 'demlmdlwe21980swqlml',
        name: 'Product 1',
      },
      {
        id: 'cdemlmdlwe21980swqwqlml',
        name: 'Product 2',
      },
      {
        id: 'ademlmdlwe21980swqwqqqlml',
        name: 'Product 3',
      },
    ],
    amount: '149',
    status: 'Pending',
  },
  {
    name: 'John Doe',
    orderId: 'demlmdlwe21980swqlml',
    products: [
      {
        id: 'demlmdlwe21980swqlml',
        name: 'Product 1',
      },
      {
        id: 'cdemlmdlwe21980swqwqlml',
        name: 'Product 2',
      },
      {
        id: 'ademlmdlwe21980swqwqqqlml',
        name: 'Product 3',
      },
    ],
    amount: '149',
    status: 'Pending',
  },
  {
    name: 'John Doe',
    orderId: 'demlmdlwe21980swqlml',
    products: [
      {
        id: 'demlmdlwe21980swqlml',
        name: 'Product 1',
      },
      {
        id: 'cdemlmdlwe21980swqwqlml',
        name: 'Product 2',
      },
      {
        id: 'ademlmdlwe21980swqwqqqlml',
        name: 'Product 3',
      },
    ],
    amount: '149',
    status: 'Pending',
  },
];

export const OrderTable = () => {
  return (
    <div className="mt-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <p className="mt-2 text-sm text-gray-700">
            A list of all the orders.
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Order ID
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Products
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-6"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-6"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {orders.map((order) => (
                    <tr
                      key={order.orderId}
                      className="divide-x divide-gray-200"
                    >
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                        {order.name}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                        {order.orderId}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                        {order.products.map((product, index) => {
                          if (index === order.products.length - 1) {
                            return <span key={product.id}>{product.name}</span>;
                          } else {
                            return (
                              <span key={product.id}>{product.name}, </span>
                            );
                          }
                        })}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">
                        {order.amount}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">
                        {order.status}
                      </td>
                      <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Change Status
                          <span className="sr-only">, {order.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
