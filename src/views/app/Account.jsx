// imports
import * as React from 'react';

// components
import { PageTitle } from '../../components/PageTitle';
import { Wrapper } from '../../components/Wrappers';
import { AccountSettings } from '../../components/account/AccountSettings';
// import { AccountPassword } from '../../components/account/AccountPassword';

export const Account = () => {
  const user = {
    name: window.localStorage.getItem('admin-user-name'),
    email: window.localStorage.getItem('admin-user-email'),
    id: window.localStorage.getItem('admin-user-id'),
    title: 'Admin',
  };

  return (
    <>
      <Wrapper>
        <PageTitle text="My Account" />
        <div className="max-w-4xl mx-auto flex flex-col">
          <main className="flex-1">
            <AccountSettings user={user} />
          </main>
        </div>
      </Wrapper>
    </>
  );
};
