// imports
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

// custom hooks
import { useAuth } from '../hooks/useAuth';

// helpers
import { RoutingPath } from '../routes/RoutingPath';

export const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(RoutingPath.Login);
  };
  return (
    <div
      className="container mx-auto flex justify-between
    py-6"
    >
      <h1>
        <Link to={RoutingPath.App}>Admin app</Link>
      </h1>
      <div>
        <ul className="flex justify-between gap-3">
          <li>
            <Link to={RoutingPath.Users}>Users</Link>
          </li>
          <li>
            <Link to={RoutingPath.Products}>Products</Link>
          </li>
          <li>
            <Link to={RoutingPath.Orders}>Orders</Link>
          </li>
          <li>
            <Link to={RoutingPath.Account}>Account</Link>
          </li>

          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
