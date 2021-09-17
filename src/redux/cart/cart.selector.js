import { createSelector } from "reselect";

const selectCart = (rootReducerState) => rootReducerState.cart;

export const makeCartItemsSelector = createSelector(
    // this will only return items in the cart, not the whole state object
    [selectCart], // first get cart state from root reducer
    (cart) => cart.cartItems // extract (or return) only items
);

export const makeCartItemsCountSelector = createSelector(
    [makeCartItemsSelector], // get items from previous selector
    (cartItems) =>
        cartItems.reduce(
            // on items in the cart, sum their quantities and return them
            (accumulatedQty, cartItem) => accumulatedQty + cartItem.quantity,
            0
        )
);
