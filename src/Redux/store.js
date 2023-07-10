import {configureStore} from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";

 import userReducer from './Slice/userSlice';

  //details for redux config
  const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };

  //persists users redux config into local storage.
  const storedUserReducer = persistReducer(persistConfig, userReducer);

//redux store details
const store = configureStore({
  reducer: { 
    user: storedUserReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);
export default store;