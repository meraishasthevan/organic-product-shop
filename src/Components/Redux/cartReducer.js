
const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex >= 0) {
                const updatedItems = [...state.cartItems];
                updatedItems[existingItemIndex].quantity += 1; 
                return {
                    ...state,
                    cartItems: updatedItems,
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
                };
            }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload),
            };

        case 'DECREASE_QUANTITY':
            return {
                ...state,
                cartItems: state.cartItems
                    .map(item => 
                        item.id === action.payload 
                            ? { ...item, quantity: Math.max(item.quantity - 1, 0) } 
                            : item
                    )
                    .filter(item => item.quantity > 0), 
            };

        case 'INCREASE_QUANTITY':
            return {
                ...state,
                cartItems: state.cartItems.map(item => 
                    item.id === action.payload 
                        ? { ...item, quantity: item.quantity + 1 } 
                        : item
                ),
            };

        case 'UPDATE_QUANTITY':
            return {
                ...state,
                cartItems: state.cartItems.map(item => 
                    item.id === action.payload.id 
                        ? { ...item, quantity: action.payload.quantity } 
                        : item
                ).filter(item => item.quantity > 0), 
            };

        case 'CLEAR_CART':
            return {
                ...state,
                cartItems: [],
            };

        default:
            return state;
    }
};

export default cartReducer;
