// imports
import * as React from 'react';
import axios from 'axios';

// components
import { FormInput, TextArea } from '../FormElements';

export const AddProductForm = () => {
  // product state
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [image, setImage] = React.useState('');
  const [material, setMaterial] = React.useState('');
  const [slug, setSlug] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const [category, setCategory] = React.useState('');

  // form state
  const [formSucess, setFormSucess] = React.useState(false);
  const [formError, setFormError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  // clear input fields
  const clearInputFields = () => {
    setTitle('');
    setDescription('');
    setPrice('');
    setImage('');
    setMaterial('');
    setSlug('');
    setQuantity('');
    setCategory('');
    return;
  };

  // funktion för att skapa produktObjektet
  const createProductObject = () => {
    return {
      title: title,
      category: category,
      price: price,
      description: description,
      material: material,
      img: image,
      quantity: quantity || 1,
      slug: slug,
    };
  };

  // funktion för att skicka in produktObjektet till databasen
  const postDataWithAxios = (product) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/resource`, product)
      .then(function (response) {
        // handle success
        setFormSucess(true);
      })
      .catch(function (error) {
        // handle error
        setFormError(true);
        setErrorMessage(error.message);
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

    const product = createProductObject();

    postDataWithAxios(product);

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
      {formSucess && <h2>The product was added sucessfully</h2>}
      {formError && (
        <>
          <h2>Something went wrong</h2>
          <p>{errorMessage}</p>
        </>
      )}
      {!formSucess && (
        <form onSubmit={(event) => onFormSubmit(event)}>
          <FormInput
            label="Product Title"
            type="text"
            name="product-title"
            id="product-title"
            placeholder="product title"
            setInputState={setTitle}
            inputState={title}
          />
          <FormInput
            label="Slug"
            type="text"
            name="slug"
            id="slug"
            placeholder="slug"
            setInputState={setSlug}
            inputState={slug}
          />
          <FormInput
            label="Product Category"
            type="text"
            name="product-category"
            id="product-category"
            placeholder="product category"
            setInputState={setCategory}
            inputState={category}
          />
          <FormInput
            label="Material"
            type="text"
            name="material"
            id="material"
            placeholder="material"
            setInputState={setMaterial}
            inputState={material}
          />
          <FormInput
            label="Price"
            type="number"
            name="price"
            id="price"
            placeholder="price"
            setInputState={setPrice}
            inputState={price}
          />
          <FormInput
            label="Img"
            type="text"
            name="img"
            id="img"
            placeholder="img file name"
            setInputState={setImage}
            inputState={image}
          />
          <FormInput
            label="Quantity"
            type="number"
            name="quantity"
            id="quantity"
            placeholder="Type in the quantity"
            setInputState={setQuantity}
            inputState={quantity}
          />
          <TextArea
            label="Description"
            name="description"
            id="description"
            placeholder="product description"
            setTextAreaState={setDescription}
            textAreaState={description}
          />

          <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 mt-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
            Add product
          </button>
        </form>
      )}
    </div>
  );
};
