import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cartSlice';
import userReducer from './userSlice';

const persistConfig = {
    key: 'cart',
    storage,
    whitelist: ['items'],
};

const persistUserConfig = {
    key: 'user',
    storage,
    whitelist: ['user'],
};


const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedUserReducer = persistReducer(persistUserConfig, userReducer);

const store = configureStore({
    reducer: {
        cart: persistedCartReducer,
        user: persistedUserReducer,
    },
});

// Persistor instance
const persistor = persistStore(store);

// Export store and persistor
export { store, persistor };
