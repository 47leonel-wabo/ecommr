import React from "react";
import { connect } from "react-redux";
import CustomButton from "../../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown-list.style.scss";

const CartItemsListDropdown = ({ hidden, cartItems }) => {
    return (
        <>
            {!hidden ? (
                <div className="cart-dropdown">
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <CartItem
                                imageUrl={item.imageUrl}
                                name={item.name}
                                price={item.price}
                                quantity={item.quantity}
                            />
                        ))}
                    </div>
                    <CustomButton>CHECK OUT</CustomButton>
                </div>
            ) : null}
        </>
    );
};

const mapStateToProps = ({ cart: { hidden, cartItems } }) => ({
    // double destructuring here, read right to left to get meaning
    hidden,
    cartItems,
});

export default connect(mapStateToProps, null)(CartItemsListDropdown);
