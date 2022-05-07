// imports
import * as React from 'react';

// components
import { PageTitle } from '../../components/PageTitle';
import { Wrapper } from '../../components/Wrappers';
import { AppNavCards } from '../../components/AppNavCards';

export const Dashboard = () => {
  const user = {
    name: 'John Doe',
  };
  return (
    <>
      <Wrapper>
        <PageTitle text={`Hello ${user.name}`} />
        <AppNavCards />
      </Wrapper>
    </>
  );
};
