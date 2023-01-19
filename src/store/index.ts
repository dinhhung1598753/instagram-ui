import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user';

// config the store
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

// export default the store
export default store;
