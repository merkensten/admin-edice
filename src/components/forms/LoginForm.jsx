// Imports
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

// custom hooks
import { useAuth } from '../../hooks/useAuth';

// Icons
import { LockClosedIcon } from '@heroicons/react/solid';

// Helpers
import { RoutingPath } from '../../routes/RoutingPath';
import { EnvironmentApiUrlHelper } from '../../helpers/EnvironmentApiUrlHelper';

export const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [apiUrl, setApiurl] = React.useState('');
  const [formError, setFormError] = React.useState(false);
  const [formErrorMessage, setFormErrorMessage] = React.useState('');

  // Sätta vilken API som skall användas
  React.useEffect(() => {
    setApiurl(EnvironmentApiUrlHelper());
  }, [apiUrl]);

  const onFormSubmit = async (event) => {
    event.preventDefault();

    const user = {
      email,
      password,
    };

    // Logga in användaren i backenden
    try {
      const response = await fetch(
        process.env.REACT_APP_SERVER_API + '/login/admin',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        }
      );

      const data = await response.json();

      if (response.status === 200) {
        // funktion för att logga in från useAuth
        login(
          data.user.name,
          data.user.email,
          data.access_token,
          data.user.adminId
        ).then(() => {
          // navigera vidare till appen
          navigate(RoutingPath.App);
        });
      }
    } catch (error) {
      console.log('Banana');
      setFormError(true);
      setFormErrorMessage('Wrong email or password');
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={onFormSubmit}>
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {formError && <p className=" text-red-600">{formErrorMessage}</p>}

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <LockClosedIcon
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </span>
          Sign in
        </button>
      </div>
    </form>
  );
};
