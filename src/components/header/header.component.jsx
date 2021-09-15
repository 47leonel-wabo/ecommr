import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import "./header.style.scss";

const NavHeader = ({ currentUser }) => {
    console.log("CURRENT USER ", currentUser);
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
                {currentUser !== null ? (
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

const mapStateToProps = (rootReducerState) => ({
    // currentUser will be passed as props to this component
    currentUser: rootReducerState.user.loggedUser,
});
export default connect(mapStateToProps)(NavHeader);
