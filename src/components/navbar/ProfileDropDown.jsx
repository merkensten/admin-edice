import * as React from 'react';
import { Link } from 'react-router-dom';

export const ProfileDropDown = ({
  showDropdown,
  dropdownHandler,
  handleLogout,
  userNavigation,
}) => {
  return (
    <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
      {/* Profile dropdown */}
      <div className="ml-3 relative">
        <div>
          <button
            onClick={dropdownHandler}
            className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span className="sr-only">Open user menu</span>
            <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
              <svg
                className="h-full w-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
          </button>
        </div>
        {showDropdown && (
          <>
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              {userNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  <button onClick={dropdownHandler}>{item.name}</button>
                </Link>
              ))}
              <button
                onClick={handleLogout}
                className="block px-4 py-2 text-sm text-gray-700"
              >
                Sign Out
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
