import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingBag } from "../../../assets/svg/shopping-bag.svg";
import { toggleCartItemList } from "../../../redux/cart/cart.actions";
import "./cartIcon.style.scss";

const CartIcon = ({ setToggleCartList, itemsCount }) => {
    return (
        <div className="cart-icon" onClick={() => setToggleCartList()}>
            <ShoppingBag className="shopping-bag" />
            <span className="item-count">{itemsCount}</span>
        </div>
    );
};
const mapStateToProps = (rootReducerState) => ({
    itemsCount: rootReducerState.cart.cartItems.reduce(
        (accumulatedQty, item) => accumulatedQty + item.quantity,
        0
    ),
});
const mapDispatchToProps = (dispatch) => ({
    setToggleCartList: () => dispatch(toggleCartItemList()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
