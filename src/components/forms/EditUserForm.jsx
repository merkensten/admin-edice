// imports
import * as React from 'react';
import axios from 'axios';

// components
import { FormInput } from './FormElements';

export const EditUserForm = ({ user }) => {
  console.log(user);
  // user stat`
  const [name, setName] = React.useState(user.name);
  const [adress, setAdress] = React.useState(user.address);
  const [zipcode, setZipcode] = React.useState(user.zipcode);
  const [city, setCity] = React.useState(user.city);
  const [phone, setPhone] = React.useState(user.phone);
  const [email, setEmail] = React.useState(user.email);
  const [userId] = React.useState(user._id);

  // form state
  const [formSucess, setFormSucess] = React.useState(false);
  const [formError, setFormError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  // clear input fields
  const clearInputFields = () => {
    setName('');
    setAdress('');
    setZipcode('');
    setCity('');
    setPhone('');
    setEmail('');
    return;
  };

  // funktion för att skapa userObjektet
  const createUserObject = () => {
    return {
      name: name.toString(),
      address: adress.toString(),
      city: city.toString(),
      zipcode: zipcode.toString(),
      phone: phone.toString(),
      email: email.toString(),
      // password: 'banana',
    };
  };

  // funktion för att skicka in userObjektet till databasen
  const updateDataWithAxios = (user) => {
    const authToken = localStorage.getItem('admin-user-token');
    console.log(`${process.env.REACT_APP_SERVER_API}/user/${userId}`);

    axios
      .put(`${process.env.REACT_APP_SERVER_API}/user/${userId}`, user, {
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

    updateDataWithAxios(user);

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
            placeholder="Name..."
            setInputState={setName}
            inputState={name}
          />

          <FormInput
            label="Adress"
            type="text"
            name="Adress"
            id="Adress"
            placeholder="Adress"
            setInputState={setAdress}
            inputState={adress}
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

          <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 mt-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
            Update User
          </button>
        </form>
      )}
    </div>
  );
};
