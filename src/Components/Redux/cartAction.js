
export const addToCart = (item) => {
    return {
        type: 'ADD_TO_CART',
        payload: item,
    };
};

export const decreaseQuantity = (itemId) => {
    return {
        type: 'DECREASE_QUANTITY',
        payload: itemId,
    };
};

export const increaseQuantity = (itemId) => {
    return {
        type: 'INCREASE_QUANTITY',
        payload: itemId,
    };
};

export const removeFromCart = (itemId) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: itemId,
    };
};

export const updateQuantity = ({ id, quantity }) => {
    return {
        type: 'UPDATE_QUANTITY',
        payload: { id, quantity },
    };
};

export const clearCart = () => {
    return {
        type: 'CLEAR_CART',
    };
};
