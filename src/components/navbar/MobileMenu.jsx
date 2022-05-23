import React from 'react';
import { Link } from 'react-router-dom';

export const MobileMenu = ({
  navigation,
  classNames,
  mobileNavHandler,
  handleLogout,
  user,
  userNavigation,
}) => {
  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navigation.map((item) => (
          <Link key={item.name} to={item.href}>
            <button
              onClick={mobileNavHandler}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block px-3 py-2 rounded-md text-base font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </button>
          </Link>
        ))}
      </div>
      <div className="pt-4 pb-3 border-t border-gray-700">
        <div className="flex items-center px-5 sm:px-6">
          <div className="flex-shrink-0">
            <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
              <svg
                className="h-full w-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-white">{user.name}</div>
            <div className="text-sm font-medium text-gray-400">
              {user.email}
            </div>
          </div>
        </div>
        <div className="mt-3 px-2 space-y-1 sm:px-3">
          {userNavigation.map((item) => (
            <Link key={item.name} to={item.href}>
              <button
                onClick={mobileNavHandler}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
              >
                {item.name}
              </button>
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};
