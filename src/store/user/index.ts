import { User } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: User[] = [];

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
});
