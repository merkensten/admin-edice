// imports
import * as React from 'react';

// components
import { UserTable } from '../../components/users/UserTable';
import { PageTitle } from '../../components/PageTitle';
import { Wrapper } from '../../components/Wrappers';

export const Users = () => {
  return (
    <div>
      <Wrapper>
        <PageTitle text="Users" />
        <UserTable />
      </Wrapper>
    </div>
  );
};
