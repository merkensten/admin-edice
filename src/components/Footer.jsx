// imports
import * as React from 'react';
import { Link } from 'react-router-dom';

// helpers
import { RoutingPath } from '../routes/RoutingPath';

const navigation = {
  main: [
    { name: 'Start', href: '/app' },
    { name: 'Products', href: RoutingPath.Products },
    { name: 'Orders', href: RoutingPath.Orders },
    { name: 'Users', href: RoutingPath.Users },
    { name: 'My Account', href: RoutingPath.Account },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto pt-12 pb-6 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link
                to={item.href}
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        
        <p className="mt-12 text-center text-base text-gray-400">
          &copy; 2022 E-dice, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
