import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/slice';
import filtersReducer from './filters/slice';
// import { persistStore, persistReducer } from 'redux-persist';
import authReducer from './auth/slice';

// const persistConfig = {
//   key: 'root',
//   storage,
// }

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});

// export const persistor = persistStore(store);