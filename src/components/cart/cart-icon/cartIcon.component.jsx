import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingBag } from "../../../assets/svg/shopping-bag.svg";
import { toggleCartItemList } from "../../../redux/cart/cart.actions";
import "./cartIcon.style.scss";

const CartIcon = ({ setToggleCartList, cartItems }) => {
    return (
        <div className="cart-icon" onClick={() => setToggleCartList()}>
            <ShoppingBag className="shopping-bag" />
            <span className="item-count">{cartItems.length}</span>
        </div>
    );
};
const mapStateToProps = (rootReducerState) => ({
    cartItems: rootReducerState.cart.cartItems,
});
const mapDispatchToProps = (dispatch) => ({
    setToggleCartList: () => dispatch(toggleCartItemList()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
