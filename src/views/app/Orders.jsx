// imports
import * as React from 'react';

// components
import { PageTitle } from '../../components/PageTitle';
import { Wrapper } from '../../components/Wrappers';
import { OrderTable } from '../../components/OrderTable';

export const Orders = () => {
  return (
    <div>
      <Wrapper>
        <PageTitle text="Orders" />
        <OrderTable />
      </Wrapper>
    </div>
  );
};
