// imports
import * as React from 'react';
import axios from 'axios';

// components
import { FormInput } from './FormElements';

export const AddUsersForm = () => {
  // user state
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [zipcode, setZipcode] = React.useState('');
  const [city, setCity] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // form state
  const [formSucess, setFormSucess] = React.useState(false);
  const [formError, setFormError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  // clear input fields
  const clearInputFields = () => {
    setName('');
    setAddress('');
    setZipcode('');
    setCity('');
    setPhone('');
    setEmail('');
    setPassword('');
    return;
  };

  // funktion för att skapa userObjektet
  const createUserObject = () => {
    return {
      name: name.toString(),
      address: address.toString(),
      city: city.toString(),
      zipcode: zipcode.toString(),
      phone: phone.toString(),
      email: email.toString(),
      password: password.toString(),
    };
  };

  // funktion för att skicka in userObjektet till databasen
  const postDataWithAxios = (user) => {
    const authToken = localStorage.getItem('admin-user-token');
    axios
      .post(`${process.env.REACT_APP_SERVER_API}/user`, user, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then(function (response) {
        // handle success
        setFormSucess(true);
      })
      .catch(function (error) {
        // handle error
        setFormError(true);
        setErrorMessage(error.message);
        console.log(error);
      })
      .then(function () {
        // always executed
        if (formSucess) {
          setFormError(false);
        }

        if (formError) {
          setFormSucess(false);
        }
      });
    return;
  };

  // funktionen som körs när formuläret submittas
  const onFormSubmit = (event) => {
    event.preventDefault();

    const user = createUserObject();

    console.log(user);

    postDataWithAxios(user);

    return;
  };

  // useEffect för att kolla om formuläret är submittat och att det lyckades
  React.useEffect(() => {
    if (formSucess) {
      clearInputFields();
    }
  }, [formSucess]);

  return (
    <div>
      {formSucess && <h2>The user was added sucessfully</h2>}
      {formError && (
        <>
          <h2>Something went wrong</h2>
          <p>{errorMessage}</p>
        </>
      )}
      {!formSucess && (
        <form onSubmit={(event) => onFormSubmit(event)}>
          <FormInput
            label="Name"
            type="text"
            name="name"
            id="name"
            placeholder="Type in the users name..."
            setInputState={setName}
            inputState={name}
          />

          <FormInput
            label="Adress"
            type="text"
            name="Adress"
            id="Adress"
            placeholder="Adress"
            setInputState={setAddress}
            inputState={address}
          />
          <FormInput
            label="Zipcode"
            type="number"
            name="zipcode"
            id="zipcode"
            placeholder="zipcode"
            setInputState={setZipcode}
            inputState={zipcode}
          />
          <FormInput
            label="city"
            type="text"
            name="city"
            id="city"
            placeholder="city"
            setInputState={setCity}
            inputState={city}
          />
          <FormInput
            label="Phone"
            type="number"
            name="phone"
            id="phone"
            placeholder="phonenumber"
            setInputState={setPhone}
            inputState={phone}
          />
          <FormInput
            label="Email"
            type="email"
            name="Email"
            id="Email"
            placeholder="Type in your email"
            setInputState={setEmail}
            inputState={email}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            id="password"
            placeholder="Type in your password"
            setInputState={setPassword}
            inputState={password}
          />

          <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 mt-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
            Add User
          </button>
        </form>
      )}
    </div>
  );
};
