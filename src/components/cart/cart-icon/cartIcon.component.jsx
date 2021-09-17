import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingBag } from "../../../assets/svg/shopping-bag.svg";
import { toggleCartItemList } from "../../../redux/cart/cart.actions";
import { makeCartItemsCountSelector } from "../../../redux/cart/cart.selector";
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
    itemsCount: makeCartItemsCountSelector(rootReducerState),
});
const mapDispatchToProps = (dispatch) => ({
    setToggleCartList: () => dispatch(toggleCartItemList()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
