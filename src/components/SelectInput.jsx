import React, { Children } from "react";

export const SelectInput = ({
    label,
    name,
    id,
    handleChange,
    isFormValidOnBlur,
    errorFields,
    options
}) => {
  return (
    <div className="selection">
      <label htmlFor="">{label}</label>
      <select
        name={name}
        id={id}
        onChange={handleChange}
        onBlur={isFormValidOnBlur}
      >
        {options.map((option, index) => (
            <option value={option.value} key={index}>{option.label}</option>
        ))}
        
      </select>
      {errorFields[name] && <p className="danger">Country is required!</p>}
    </div>
  );
};
