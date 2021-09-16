import { TOGGLE_CART_ITEM_LIST } from "../../constants/cart-action-types";

const INITIAL = {
    hidden: true,
};

const cartReducer = (prevSate = INITIAL, action) => {
    switch (action.type) {
        case TOGGLE_CART_ITEM_LIST:
            return {
                ...prevSate,
                hidden: !prevSate.hidden, // no need for payload, just switch value to its opposite
            };

        default:
            return prevSate;
    }
};

export default cartReducer;
