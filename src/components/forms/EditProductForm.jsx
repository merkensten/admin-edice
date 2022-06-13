// imports
import * as React from 'react';
import axios from 'axios';

// components
import { FormInput, TextArea } from './FormElements';

export const EditProductForm = ({ product }) => {
  // product state
  const [title, setTitle] = React.useState(product.title);
  const [description, setDescription] = React.useState(product.description);
  const [price, setPrice] = React.useState(product.price);
  const [primaryImage, setPrimaryImage] = React.useState(product.imagePrimary);
  const [images, setImages] = React.useState(product.images);
  const [material, setMaterial] = React.useState(product.material);
  const [slug, setSlug] = React.useState(product.slug);
  const [quantity, setQuantity] = React.useState(product.quantity);
  const [category, setCategory] = React.useState(product.category);
  const [productId] = React.useState(product._id);

  // form state
  const [formSucess, setFormSucess] = React.useState(false);
  const [formError, setFormError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  // clear input fields
  const clearInputFields = () => {
    setTitle('');
    setDescription('');
    setPrice('');
    setPrimaryImage('');
    setImages('');
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
      imagePrimary: primaryImage,
      images: images,
      quantity: quantity || 1,
      slug: slug,
    };
  };

  // funktion för att skicka in produktObjektet till databasen
  const updateDataWithAxios = (product) => {
    const authToken = localStorage.getItem('admin-user-token');
    axios
      .put(
        `${process.env.REACT_APP_SERVER_API}/product/${productId}`,
        product,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
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

    updateDataWithAxios(product);

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
      {formSucess && <h2>The product was updated sucessfully</h2>}
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
            label="Primary Img"
            type="text"
            name="primary-img"
            id="primary-img"
            placeholder="img file name"
            setInputState={setPrimaryImage}
            inputState={primaryImage}
          />
          <FormInput
            label="Images"
            type="text"
            name="img"
            id="img"
            placeholder="type in image file names separated by commas"
            setInputState={setImages}
            inputState={images}
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
            Update product
          </button>
        </form>
      )}
    </div>
  );
};
