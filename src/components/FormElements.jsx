import * as React from 'react';

const tailwindStyles =
  'focus:shadow-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';

const FormInput = ({
  type,
  placeholder,
  id,
  name,
  label,
  setInputState,
  inputState,
}) => {
  const handleInputChange = (e) => {
    setInputState(e.target.value);
  };
  return (
    <label className="block text-base mt-2 font-medium text-gray-900">
      {label}
      <input
        onChange={handleInputChange}
        className={tailwindStyles}
        type={type}
        placeholder={`Type in the ${placeholder}...`}
        id={id}
        name={name}
        value={inputState}
      />
    </label>
  );
};

const TextArea = ({
  placeholder,
  id,
  name,
  label,
  setTextAreaState,
  textAreaState,
}) => {
  const handleTextAreaChange = (e) => {
    setTextAreaState(e.target.value);
  };
  return (
    <label className="block text-base mt-2 font-medium text-gray-900">
      {label}
      <textarea
        onChange={handleTextAreaChange}
        name={name}
        id={id}
        placeholder={`Type in the ${placeholder}...`}
        className={tailwindStyles}
        value={textAreaState}
      ></textarea>
    </label>
  );
};

export { FormInput, TextArea };
