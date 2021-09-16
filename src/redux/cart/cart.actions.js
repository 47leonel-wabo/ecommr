import {
    CART_ADD_ITEM,
    TOGGLE_CART_ITEM_LIST,
} from "../../constants/cart-action-types";

export const toggleCartItemList = () => ({
    type: TOGGLE_CART_ITEM_LIST,
});

export const addItem = (item) => ({
    type: CART_ADD_ITEM,
    payload: item,
});
