import React from 'react';

// Helpers
import { RoutingPath } from '../../routes/RoutingPath';

const navigation = [
  { name: 'App', href: '/', current: true },
  { name: 'Products', href: RoutingPath.Products, current: false },
  { name: 'Users', href: RoutingPath.Users, current: false },
  { name: 'Orders', href: RoutingPath.Orders, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const NavMenu = () => {
  return (
    <>
      <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'px-3 py-2 rounded-md text-sm font-medium'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </a>
        ))}
      </div>
    </>
  );
};
