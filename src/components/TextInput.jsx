import React from "react";

export const TextInput = ({
  type,
  name,
  id,
  handleChange,
  isFormValidOnBlur,
  placeholder,
  label,
  errorFields,
}) => {



  return (
    <div className="input-group">
      <label htmlFor="">{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        onChange={handleChange}
        onBlur={isFormValidOnBlur}
        placeholder={placeholder}
      />
      {errorFields[name] && <p className="danger">{label} is required!</p>}
    </div>
  );
};
