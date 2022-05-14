// imports
import * as React from 'react';

// components
import { UserTable } from '../../components/users/UserTable';
import { PageTitle } from '../../components/PageTitle';
import { Wrapper } from '../../components/Wrappers';
import { UsersTitle } from '../../components/users/UsersTitle';
import { AddUsersForm } from '../../components/users/AddUsersForm';

// utils
import { Modal } from '../../utils/Modal';

export const Users = () => {
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
        <PageTitle text="Users" />
        <UsersTitle openModal={openModal} />
        <UserTable />
        {showModal && (
          <Modal
            closeModal={closeModal}
            modalTitle="Add User"
            children={
              <>
                <AddUsersForm />
              </>
            }
          />
        )}
      </Wrapper>
    </div>
  );
};
