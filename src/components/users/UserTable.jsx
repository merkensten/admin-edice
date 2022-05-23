// imports
import * as React from 'react';

// components
import { TableItem } from '../table/TableItem';
import { TableHead } from '../table/TableHead';
import { TableWrapper } from '../table/TableWrapper';
import { TableBody } from '../table/TableBody';
import { TableEditButton } from '../table/TableEditButton';
import { TableRow } from '../table/TableRow';
import { EditUser } from './EditUser';

// useFetch
import { GetData } from '../../hooks/useFetch';
import { useLockScroll } from '../../hooks/useLockScroll';

// utils
import { Modal } from '../../utils/Modal';

export const UserTable = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [activeUser, setActiveUser] = React.useState(null);

  const { unlockScroll } = useLockScroll();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    unlockScroll();
  };

  const editUser = (user) => {
    setActiveUser(user);
    openModal();
  };

  const modalContent = () => {
    return (
      <>
        <EditUser user={activeUser} closeModal={closeModal} />
      </>
    );
  };
  const {
    data: users,
    loading,
    error,
    errorMessage,
  } = GetData(`${process.env.REACT_APP_SERVER_URL}/users/getall`);

  const tableHeadItems = [
    { id: 1, text: 'Name' },
    { id: 2, text: 'Adress' },
    { id: 3, text: 'City' },
    { id: 4, text: 'Email' },
    { id: 5, text: 'Phone' },
  ];

  return (
    <>
      <TableWrapper loading={loading} error={error} errorMessage={errorMessage}>
        <TableHead tableHeadItems={tableHeadItems} />

        <TableBody>
          {users.length > 0 &&
            users.map((user) => (
              <TableRow key={user._id}>
                <TableItem itemData={user.fname} />
                <TableItem itemData={user.adress} />
                <TableItem itemData={user.city} />
                <TableItem itemData={user.email} />
                <TableItem itemData={user.phone} />
                <TableEditButton
                  item={user}
                  text="Edit User"
                  onClickHandler={() => editUser(user)}
                />
              </TableRow>
            ))}
        </TableBody>
      </TableWrapper>
      {showModal && (
        <Modal
          closeModal={closeModal}
          modalTitle="Edit User"
          children={<>{modalContent()}</>}
        />
      )}
    </>
  );
};
