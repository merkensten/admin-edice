// imports
import * as React from 'react';
import axios from 'axios';

// components
import { FormInput } from './FormElements';

export const EditUserForm = ({ user }) => {
  // user state
  const [fname, setFname] = React.useState(user.fname);
  const [lname, setLname] = React.useState(user.lname);
  const [adress, setAdress] = React.useState(user.adress);
  const [zipcode, setZipcode] = React.useState(user.zipcode);
  const [city, setCity] = React.useState(user.city);
  const [phone, setPhone] = React.useState(user.phone);
  const [email, setEmail] = React.useState(user.email);

  // form state
  const [formSucess, setFormSucess] = React.useState(false);
  const [formError, setFormError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  // clear input fields
  const clearInputFields = () => {
    setFname('');
    setLname('');
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
      fname: fname.toString(),
      lname: lname.toString(),
      adress: adress.toString(),
      city: city.toString(),
      zipcode: zipcode.toString(),
      phone: phone.toString(),
      email: email.toString(),
    };
  };

  // funktion för att skicka in userObjektet till databasen
  const postDataWithAxios = (user) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/users`, user)
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
            label="First name"
            type="text"
            name="fname"
            id="fname"
            placeholder="first name"
            setInputState={setFname}
            inputState={fname}
          />
          <FormInput
            label="Last name"
            type="text"
            name="lname"
            id="lname"
            placeholder="lname"
            setInputState={setLname}
            inputState={lname}
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
