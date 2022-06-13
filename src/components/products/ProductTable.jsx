import * as React from 'react';

// components
import { TableItem } from '../table/TableItem';
import { TableHead } from '../table/TableHead';
import { TableWrapper } from '../table/TableWrapper';
import { TableBody } from '../table/TableBody';
import { TableEditButton } from '../table/TableEditButton';
import { TableRow } from '../table/TableRow';
import { EditProduct } from './EditProduct';

// hooks
import { GetData } from '../../hooks/useFetch';
import { useLockScroll } from '../../hooks/useLockScroll';

// utils
import { Modal } from '../../utils/Modal';

// helpers
import { ReloadPage } from '../../helpers/ReloadPage';
import { EnvironmentApiUrlHelper } from '../../helpers/EnvironmentApiUrlHelper';

export const ProductTable = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [activeProduct, setActiveProduct] = React.useState(null);
  const [produkter, setProdukter] = React.useState([]);

  const [apiUrl, setApiurl] = React.useState('');

  // Sätta vilken API som skall användas
  React.useEffect(() => {
    setApiurl(EnvironmentApiUrlHelper());
  }, [apiUrl]);

  const {
    data: products,
    loading,
    error,
    errorMessage,
  } = GetData(`${process.env.REACT_APP_SERVER_API}/product`);

  React.useEffect(() => {
    if (products) {
      setProdukter(products);
      console.log(produkter);
    }
  }, [products, produkter]);

  const { unlockScroll } = useLockScroll();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = async () => {
    setShowModal(false);
    unlockScroll();
    // halvdan lösning för att refetcha sidan
    ReloadPage();
  };

  const editProduct = (product) => {
    setActiveProduct(product);
    openModal();
  };

  const modalContent = () => {
    return (
      <>
        <EditProduct product={activeProduct} closeModal={closeModal} />
      </>
    );
  };

  const tableHeadItems = [
    { id: 1, text: 'Productname' },
    { id: 2, text: 'Category' },
    { id: 3, text: 'Price' },
    { id: 4, text: 'Description' },
  ];

  return (
    <>
      <TableWrapper loading={loading} error={error} errorMessage={errorMessage}>
        <TableHead tableHeadItems={tableHeadItems} />

        <TableBody>
          {produkter.length > 0 &&
            produkter.map((product) => (
              <TableRow key={product._id}>
                <TableItem itemData={product.title} />
                <TableItem itemData={product.category} />
                <TableItem itemData={product.price} />
                <TableItem itemData={product.description} />
                <TableEditButton
                  item={product}
                  text="Edit Product"
                  onClickHandler={() => editProduct(product)}
                />
              </TableRow>
            ))}
        </TableBody>
      </TableWrapper>
      {showModal && (
        <Modal
          closeModal={closeModal}
          modalTitle="Edit Product"
          children={<>{modalContent()}</>}
        />
      )}
    </>
  );
};
