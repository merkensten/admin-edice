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

// helpers
import { ReloadPage } from '../../helpers/ReloadPage';
import { EnvironmentApiUrlHelper } from '../../helpers/EnvironmentApiUrlHelper';

export const UserTable = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [activeUser, setActiveUser] = React.useState(null);
  const [data, setData] = React.useState([]);

  const [apiUrl, setApiurl] = React.useState('');

  // Sätta vilken API som skall användas
  React.useEffect(() => {
    setApiurl(EnvironmentApiUrlHelper());
  }, [apiUrl]);

  const { unlockScroll } = useLockScroll();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    unlockScroll();
    // halvdan lösning för att refetcha sidan
    ReloadPage();
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
  // const {
  //   data: users,
  //   loading,
  //   error,
  //   errorMessage,
  // } = GetData(`${apiUrl}/user`);

  const tableHeadItems = [
    { id: 1, text: 'Name' },
    { id: 2, text: 'Adress' },
    { id: 3, text: 'City' },
    { id: 4, text: 'Email' },
    { id: 5, text: 'Phone' },
  ];

  // Hämta data från API:et med säkerhet (Refaktorisera denna koden till useFetch hooken)
  React.useEffect(() => {
    const getUserData = async () => {
      const authToken = localStorage.getItem('admin-user-token');
      console.log(authToken);
      const response = await fetch(`${apiUrl}/user`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      });
      const data = await response.json();
      setData(data);
    };
    getUserData();
    console.log('banan');
  }, [apiUrl]);

  console.log(data);

  return (
    <>
      {/* <TableWrapper loading={loading} error={error} errorMessage={errorMessage}> */}
      <TableWrapper>
        <TableHead tableHeadItems={tableHeadItems} />

        <TableBody>
          {data.length > 0 &&
            data.map((user) => (
              <TableRow key={user._id}>
                <TableItem itemData={user.name} />
                <TableItem itemData={user.address} />
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
