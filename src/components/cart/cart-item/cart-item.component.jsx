import React from "react";
import "./cart-item.style.scss";

function CartItem({ imageUrl, name, price, quantity }) {
    return (
        <div className="cart-item">
            <img className="item-img" src={imageUrl} alt={name} />
            <div className="item-detail">
                <h3 className="item-name">{name}</h3>
                <span className="item-info">{`${quantity} x $${price}`}</span>
            </div>
        </div>
    );
}

export default CartItem;
