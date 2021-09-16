export const addNewItemToCart = (existingCartItems, newItem) => {
    // look if there is already that item in the cart
    const isItemAlreadyInCart = existingCartItems.find(
        (item) => item.id === newItem.id
    );
    // if there is corresponding item
    if (isItemAlreadyInCart) {
        // map returns an array
        return existingCartItems.map((cartItem) =>
            cartItem.id === newItem.id
                ? {
                      ...cartItem,
                      quantity: cartItem.quantity + 1,
                  }
                : cartItem
        );
    }

    // during first record set quantity
    return [...existingCartItems, { ...newItem, quantity: 1 }];
};
