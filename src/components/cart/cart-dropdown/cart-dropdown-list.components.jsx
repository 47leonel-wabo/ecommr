import React from "react";
import CustomButton from "../../button/button.component";
import "./cart-dropdown-list.style.scss";

const CartItemsListDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">items</div>
            <CustomButton>CHECK OUT</CustomButton>
        </div>
    );
};

export default CartItemsListDropdown;
