import React from "react";

export const RadioInput = ({
  type,
  name,
  id,
  value,
  handleChange,
  isFormValidOnBlur,
  label,
}) => {
  return (
    <div className="field-items">
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
        onBlur={isFormValidOnBlur}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
