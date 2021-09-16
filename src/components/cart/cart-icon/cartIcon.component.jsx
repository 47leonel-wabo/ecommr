import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingBag } from "../../../assets/svg/shopping-bag.svg";
import { toggleCartItemList } from "../../../redux/cart/cart.actions";
import "./cartIcon.style.scss";

const CartIcon = (props) => {
    return (
        <div className="cart-icon" onClick={() => props.setToggleCartList()}>
            <ShoppingBag className="shopping-bag" />
            <span className="item-count">0</span>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    setToggleCartList: () => dispatch(toggleCartItemList()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
