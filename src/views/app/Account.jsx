// imports
import * as React from 'react';

// components
import { PageTitle } from '../../components/PageTitle';
import { Wrapper } from '../../components/Wrappers';
import { AccountSettings } from '../../components/account/AccountSettings';
import { AccountPassword } from '../../components/account/AccountPassword';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Account = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(true);

  const tabs = [
    { name: 'General', href: '#', current: showSettings },
    { name: 'Password', href: '#', current: showPassword },
  ];

  const user = {
    name: 'John Doe',
    email: 'john@doe.com',
    title: 'Owner',
  };

  const toggleViewHandler = () => {
    setShowPassword(!showPassword);
    setShowSettings(!showSettings);
  };
  return (
    <>
      <Wrapper>
        <PageTitle text="My Account" />
        <div className="max-w-4xl mx-auto flex flex-col">
          <main className="flex-1">
            <div className="mt-10">
              <div className="px-4 sm:px-6 md:px-0">
                <h1 className="text-3xl font-semibold text-gray-900">
                  {showPassword && 'Password'}
                  {showSettings && 'Settings'}
                </h1>
              </div>
              {/* Tabs */}
              <div className="lg:hidden">
                <label htmlFor="selected-tab" className="sr-only">
                  Select a tab
                </label>
                <select
                  id="selected-tab"
                  name="selected-tab"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                  defaultValue={tabs.find((tab) => tab.current).name}
                >
                  {tabs.map((tab) => (
                    <option key={tab.name}>{tab.name}</option>
                  ))}
                </select>
              </div>
              <div className="hidden lg:block">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex space-x-8">
                    {tabs.map((tab) => (
                      <button
                        key={tab.name}
                        onClick={toggleViewHandler}
                        className={classNames(
                          tab.current
                            ? 'border-purple-500 text-purple-600'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                          'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                        )}
                      >
                        {tab.name}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {showSettings && <AccountSettings user={user} />}
            {showPassword && <AccountPassword user={user} />}
          </main>
        </div>
      </Wrapper>
    </>
  );
};
