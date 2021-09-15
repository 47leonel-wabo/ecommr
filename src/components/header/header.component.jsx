import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import "./header.style.scss";

const NavHeader = ({ currentUser }) => {
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
                {currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        Sign Out |{" "}
                        {currentUser && (
                            <strong
                                style={{
                                    color: "tomato",
                                }}
                            >
                                {currentUser.displayName}
                            </strong>
                        )}
                    </div>
                ) : (
                    <Link className="option" to="/signin">
                        Sign In
                    </Link>
                )}
            </div>
        </div>
    );
};

export default NavHeader;
