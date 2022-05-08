// imports
import * as React from 'react';


// components
import { PageTitle } from '../../components/PageTitle';
import { Wrapper } from '../../components/Wrappers';
import { ProductTable } from '../../components/ProductTable';

export const Products = () => {
  
  return (
    <div>
      <Wrapper>
        <PageTitle text="Products" />
        <ProductTable />
      </Wrapper>
    </div>
  );
};
