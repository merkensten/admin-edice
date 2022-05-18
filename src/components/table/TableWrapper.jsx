// imports
import * as React from 'react';
import { TableError } from './TableError';

// components
import { TableLoading } from './TableLoading';

export const TableWrapper = ({ children, loading, error, errorMessage }) => {
  return (
    <div className="py-5">
      <div className="flex flex-col">
        <div className="mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            {loading && <TableLoading />}
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                {children}
              </table>
              {error && <TableError errorMessage={errorMessage} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
