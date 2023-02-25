import { User } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import users from '~/mocks/user.json';

const initialState: User[] = users;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});
