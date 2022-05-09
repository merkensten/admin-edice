// imports
import * as React from 'react';

// components
import { PageTitle } from '../../components/PageTitle';
import { Wrapper } from '../../components/Wrappers';
import { AppNavCards } from '../../components/AppNavCards';

import { Modal } from '../../utils/Modal';

export const Dashboard = () => {
  const user = {
    name: 'John Doe',
  };
  const [showModal, setShowModal] = React.useState(false);

  const displayModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Wrapper>
        <PageTitle text={`Hello ${user.name}`} />
        <AppNavCards />
        <button onClick={displayModal}>Show modal</button>
        {showModal && (
          <Modal
            closeModal={closeModal}
            children={
              <div>
                <AppNavCards />
              </div>
            }
          />
        )}
      </Wrapper>
    </>
  );
};
