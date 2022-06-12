// imports
import * as React from 'react';

// components
import { PageTitle } from '../../components/PageTitle';
import { Wrapper } from '../../components/Wrappers';
import { AppNavCards } from '../../components/AppNavCards';

export const Dashboard = () => {
  const getUserData = () => {
    const user = {
      name: window.localStorage.getItem('admin-user-name'),
    };

    console.log(user.name);

    return user;
  };

  const user = getUserData();
  console.log(user);

  return (
    <>
      <Wrapper>
        <PageTitle text={`Hello ${user.name}`} />
        <AppNavCards />
      </Wrapper>
    </>
  );
};
