import React from "react";
import "./form-input.scss";

const FormInput = ({ handleChange, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {otherProps.label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {otherProps.label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
