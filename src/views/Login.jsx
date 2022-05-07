import * as React from 'react';

// custom hooks
import { useAuth } from '../hooks/useAuth';

// components
import { LoginForm } from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';

// helpers
import { RoutingPath } from '../routes/RoutingPath';

export const Login = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      navigate(RoutingPath.App);
    }
  }, [user, navigate]);

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 my-20">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h1 className="text-5xl text-center font-extrabold">
              E-Dice Admin App
            </h1>
            <h2 className="mt-6 text-center text-3xl font-semibold  text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <LoginForm />
        </div>
      </div>
    </>
  );
};
