// imports
import * as React from 'react';

// components
import { PageTitle } from '../../components/PageTitle';
import { Wrapper } from '../../components/Wrappers';
import { ProductTable } from '../../components/products/ProductTable';
import { ProductsTitle } from '../../components/products/ProductsTitle';
import { AddProductForm } from '../../components/products/AddProductForm';

// utils
import { Modal } from '../../utils/Modal';

export const Products = () => {
  const [showModal, setShowModal] = React.useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <Wrapper>
        <PageTitle text="Products" />
        <ProductsTitle openModal={openModal} />
        <ProductTable />
        {showModal && (
          <Modal
            closeModal={closeModal}
            modalTitle="Add Product"
            children={
              <>
                <AddProductForm />
              </>
            }
          />
        )}
      </Wrapper>
    </div>
  );
};
