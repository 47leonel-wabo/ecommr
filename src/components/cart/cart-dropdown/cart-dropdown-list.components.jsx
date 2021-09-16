import React from "react";
import { connect } from "react-redux";
import CustomButton from "../../button/button.component";
import "./cart-dropdown-list.style.scss";

const CartItemsListDropdown = ({ hidden }) => {
    return (
        <>
            {!hidden ? (
                <div className="cart-dropdown">
                    <div className="cart-items">items</div>
                    <CustomButton>CHECK OUT</CustomButton>
                </div>
            ) : null}
        </>
    );
};

const mapStateToProps = ({ cart: { hidden } }) => ({
    // double destructuring here, read right to left to get meaning
    hidden,
});

export default connect(mapStateToProps, null)(CartItemsListDropdown);
