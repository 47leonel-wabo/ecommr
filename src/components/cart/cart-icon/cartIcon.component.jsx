import React from "react";
import { ReactComponent as ShoppingBag } from "../../../assets/svg/shopping-bag.svg";
import "./cartIcon.style.scss";

const CartIcon = () => {
    return (
        <div className="cart-icon">
            <ShoppingBag className="shopping-bag" />
            <span className="item-count">0</span>
        </div>
    );
};

export default CartIcon;
