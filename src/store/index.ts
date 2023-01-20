import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user';
import { postSlice } from './post';

// config the store
const makeStore = () =>
  configureStore({
    reducer: {
      user: userSlice.reducer,
      post: postSlice.reducer,
    },
  });
const store = makeStore();

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;

// export default the store
export default store;
