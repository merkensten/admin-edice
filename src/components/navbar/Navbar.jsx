// imports
import * as React from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useNavigate, Link } from 'react-router-dom';

// custom hooks
import { useAuth } from '../../hooks/useAuth';

// components
import { NavbarWrapper } from '../Wrappers';

// helpers
import { RoutingPath } from '../../routes/RoutingPath';
import { ProfileDropDown } from './ProfileDropDown';
import { MobileMenu } from './MobileMenu';

const user = {
  name: 'John Doe',
  email: 'john@doe.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
  { name: 'Products', href: RoutingPath.Products, current: false },
  { name: 'Users', href: RoutingPath.Users, current: false },
  { name: 'Orders', href: RoutingPath.Orders, current: false },
];
const userNavigation = [{ name: 'My Account', href: RoutingPath.Account }];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Navbar = () => {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(RoutingPath.Login);
  };

  const dropdownHandler = () => {
    setShowDropdown(!showDropdown);
  };

  const mobileNavHandler = () => {
    setShowMobileNav(!showMobileNav);
  };
  return (
    <div className="bg-gray-800">
      <NavbarWrapper>
        <div>
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="-ml-2 mr-2 flex items-center md:hidden">
                {/* Mobile menu button */}
                <button
                  onClick={mobileNavHandler}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  {showMobileNav ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
              <div className="flex-shrink-0 flex items-center">
                <Link to="/app">
                  <p className="text-xl md:text-2xl text-white lg:text-3xl">
                    E-dice admin
                  </p>
                </Link>
              </div>
              <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'px-3 py-2 rounded-md text-sm font-medium lg:text-base'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to={RoutingPath.Products}>
                  <button
                    type="button"
                    className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                  >
                    Products
                  </button>
                </Link>
              </div>
              {/* Profile dropdown */}
              <ProfileDropDown
                showDropdown={showDropdown}
                handleLogout={handleLogout}
                dropdownHandler={dropdownHandler}
                userNavigation={userNavigation}
              />
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {showMobileNav && (
          <MobileMenu
            navigation={navigation}
            user={user}
            classNames={classNames}
            mobileNavHandler={mobileNavHandler}
            handleLogout={handleLogout}
            userNavigation={userNavigation}
          />
        )}
      </NavbarWrapper>
    </div>
  );
};
