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

export const Routing = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />

            {/* App Views */}
            <Route path={RoutingPath.app}>
              <Route index element={<Dashboard />} />
            </Route>

            {/* Not Found */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};
