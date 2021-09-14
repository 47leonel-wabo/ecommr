import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";

const NavHeader = () => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <span className="logo">
                    Shop-<span className="nek">nek</span>
                </span>
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    Shop
                </Link>
                <Link to="/contact" className="option">
                    Contact
                </Link>
                <Link to="/signin-signup" className="option">
                    Sign In
                </Link>
            </div>
        </div>
    );
};

export default NavHeader;
