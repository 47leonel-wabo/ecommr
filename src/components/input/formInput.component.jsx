import React from "react";
import "./inputForm.style.scss";

const FormInputField = ({ label, handleChange, ...otherProps }) => {
    return (
        <div className="group">
            {label ? (
                <div
                    className={`${
                        otherProps.value.length ? "shrink" : ""
                    } form-input-label`}
                >
                    {label}
                </div>
            ) : null}
            <input
                className="form-input"
                onChange={handleChange}
                {...otherProps}
            />
        </div>
    );
};

export default FormInputField;
