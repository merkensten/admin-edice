import * as React from 'react';

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
    <label className="block text-base font-medium text-gray-900">
      {label}
      <input
        onChange={handleInputChange}
        className="w-full"
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
    <label className="block text-base font-medium text-gray-900">
      {label}
      <textarea
        onChange={handleTextAreaChange}
        name={name}
        id={id}
        placeholder={`Type in the ${placeholder}...`}
        className="w-full"
        value={textAreaState}
      ></textarea>
    </label>
  );
};

export { FormInput, TextArea };
