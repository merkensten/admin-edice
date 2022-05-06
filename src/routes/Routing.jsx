// imports
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RoutingPath } from './RoutingPath';

// views
import { Layout } from '../views/Layout';
import { Login } from '../views/Login';
import { NotFound } from '../views/NotFound';

// app views
import { Dashboard } from '../views/app/Dashboard';
import { Account } from '../views/app/Account';
import { Products } from '../views/app/Products';
import { Orders } from '../views/app/Orders';
import { Users } from '../views/app/Users';

export const Routing = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path={RoutingPath.Login}>
            <Route index element={<Login />} />

            {/* App Views */}
            <Route path={RoutingPath.App}>
              <Route index element={<Dashboard />} />
              <Route path={RoutingPath.Account} element={<Account />} />
              <Route path={RoutingPath.Products} element={<Products />} />
              <Route path={RoutingPath.Orders} element={<Orders />} />
              <Route path={RoutingPath.Users} element={<Users />} />
            </Route>

            {/* Not Found */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};
