import React from "react";
import "./button.style.scss";

const CustomButton = ({ children, isGoogle, inverted, ...otherProps }) => {
    return (
        <button
            className={`${inverted ? "inverted" : ""} ${
                isGoogle ? "google-sign-in" : ""
            } custom-button`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default CustomButton;
