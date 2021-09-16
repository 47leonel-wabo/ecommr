import {
    CART_ADD_ITEM,
    TOGGLE_CART_ITEM_LIST,
} from "../../constants/cart-action-types";

const INITIAL = {
    hidden: true,
    cartItems: [],
};

const cartReducer = (prevSate = INITIAL, action) => {
    switch (action.type) {
        case TOGGLE_CART_ITEM_LIST:
            return {
                ...prevSate,
                hidden: !prevSate.hidden, // no need for payload, just switch value to its opposite
            };
        case CART_ADD_ITEM:
            return {
                ...prevSate,
                cartItems: [...prevSate.cartItems, action.payload],
            };
        default:
            return prevSate;
    }
};

export default cartReducer;
