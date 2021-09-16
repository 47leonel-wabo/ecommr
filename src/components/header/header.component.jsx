import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import CartItemsListDropdown from "../cart/cart-dropdown/cart-dropdown-list.components";
import CartIcon from "../cart/cart-icon/cartIcon.component";
import "./header.style.scss";

const NavHeader = ({ loggedUser }) => {
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
                {loggedUser ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        Sign Out |{" "}
                        <strong
                            style={{
                                color: "tomato",
                            }}
                        >
                            {loggedUser.displayName}
                        </strong>
                    </div>
                ) : (
                    <Link className="option" to="/signin">
                        Sign In
                    </Link>
                )}
                <CartIcon />
            </div>
            <CartItemsListDropdown />
        </div>
    );
};
// get latest state as props
const mapStateToProps = (rootReducerState) => ({
    // loggedUser will be passed as props to this component
    loggedUser: rootReducerState.user.loggedUser,
});
export default connect(mapStateToProps)(NavHeader);
