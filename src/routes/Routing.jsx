// imports
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RoutingPath } from './RoutingPath';

// custom hooks
import { useAuth } from '../hooks/useAuth';

// components
// import { RequireAuth } from './RequireAuth';

// Layout views
import { Layout } from '../views/Layout';

// views
import { Login } from '../views/Login';
import { NotFound } from '../views/NotFound';

// app views
import { Dashboard } from '../views/app/Dashboard';
import { Account } from '../views/app/Account';
import { Products } from '../views/app/Products';
import { Orders } from '../views/app/Orders';
import { Users } from '../views/app/Users';

export const Routing = () => {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={RoutingPath.Login}>
            {!user && <Route index element={<Login />} />}
            {user && (
              <Route path={RoutingPath.App}>
                <Route index element={<Dashboard />} />
                <Route path="account" element={<Account />} />
                <Route path="products" element={<Products />} />
                <Route path="orders" element={<Orders />} />
                <Route path="users" element={<Users />} />
              </Route>
            )}

            {/* Not Found */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
  // return (
  //   <BrowserRouter>
  //     <Layout>
  //       <Routes>
  //         <Route path={RoutingPath.Login}>
  //           <Route index element={<Login />} />

  //           {/* App Views */}

  //           <Route path={RoutingPath.App}>
  //             <Route
  //               index
  //               element={
  //                 <RequireAuth>
  //                   <Dashboard />
  //                 </RequireAuth>
  //               }
  //             />
  //             <Route
  //               path="account"
  //               element={
  //                 <RequireAuth>
  //                   <Account />
  //                 </RequireAuth>
  //               }
  //             />
  //             <Route
  //               path="products"
  //               element={
  //                 <RequireAuth>
  //                   <Products />
  //                 </RequireAuth>
  //               }
  //             />
  //             <Route
  //               path="orders"
  //               element={
  //                 <RequireAuth>
  //                   <Orders />
  //                 </RequireAuth>
  //               }
  //             />
  //             <Route
  //               path="users"
  //               element={
  //                 <RequireAuth>
  //                   <Users />
  //                 </RequireAuth>
  //               }
  //             />
  //           </Route>

  //           {/* Not Found */}
  //           <Route path="*" element={<NotFound />} />
  //         </Route>
  //       </Routes>
  //     </Layout>
  //   </BrowserRouter>
  // );
};
