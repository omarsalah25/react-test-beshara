import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Import default localStorage
import cartReducer from './cartSlice'; // Assuming you have this reducer

// Redux persist configuration
const persistConfig = {
    key: 'cart', // LocalStorage key
    storage, // Use localStorage
    whitelist: ['items'], // Persist only the `items` part of the state
};

// Persisted reducer using redux-persist
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

// Redux store configuration
const store = configureStore({
    reducer: {
        cart: persistedCartReducer, // Use the persisted reducer
    },
});

// Create persistor object
const persistor = persistStore(store);

// Export both store and persistor
export { store, persistor };
