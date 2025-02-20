import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],  // This will hold the items in the cart
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const { id, quantity } = action.payload;  // Ensure you're receiving a proper item object

            // Find the existing item in the cart
            const existingItemIndex = state.items.findIndex(item => item.id === id);

            if (existingItemIndex === -1) {
                // Item doesn't exist, add it to the cart with the given quantity
                state.items.push(action.payload);
            } else {
                // Item exists, increment its quantity
                state.items[existingItemIndex].quantity += quantity;
            }
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },

        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === id);
            if (itemIndex !== -1) {
                state.items[itemIndex].quantity = quantity;
            }
        },

        resetCart: (state) => {
            state.items = [];
        },

    },
});

export const { addItem, removeItem, updateQuantity, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
