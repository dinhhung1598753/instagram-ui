import { Post } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: Post[] = [
  {
    id: 1,
    title: 'thank @dottie.store for this pretty gift, a stunning dress ✨',
    images: [
      '/assets/posts/thuytien-post-1.jpeg',
      '/assets/posts/thuytien-post-2.jpeg',
      '/assets/posts/thuytien-post-3.jpeg',
      '/assets/posts/thuytien-post-4.jpeg',
    ],
    location: 'Bangkok',
    author: {
      id: 1,
      name: 'tienng12',
      avatar: '/assets/avatars/thuy-tien-avt.jpeg',
      hasStory: true,
    },
    likeCount: 100,
    publishedAt: 1674203299311,
  },
  {
    id: 2,
    title: 'thank @dottie.store for this pretty gift, a stunning dress ✨',
    images: ['/assets/posts/thuy-tien-1.jpeg'],
    location: 'Bangkok',
    author: {
      id: 1,
      name: 'tienng12',
      avatar: '/assets/avatars/thuy-tien-avt.jpeg',
      hasStory: true,
    },
    likeCount: 1000,
    publishedAt: 1674203299311,
  },
];

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
});
