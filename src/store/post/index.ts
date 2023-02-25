import { Post } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import posts from '~/mocks/post.json'

const initialState: Post[] = posts;

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
});
