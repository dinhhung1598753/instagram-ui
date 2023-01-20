import { User } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: User[] = [
  {
    id: 1,
    name: 'klynzii',
    avatar: '/assets/avatars/klynzii.jpeg',
    hasStory: true,
  },
  {
    id: 2,
    name: '_dcat1811',
    avatar: '/assets/avatars/_dcat1811.jpeg',
    hasStory: true,
  },
  {
    id: 3,
    name: '_h.nhu.01',
    avatar: '/assets/avatars/_h.nhu.01.jpeg',
    hasStory: true,
  },
  {
    id: 4,
    name: 'cas.naf',
    avatar: '/assets/avatars/cas.naf.jpeg',
    hasStory: true,
  },
  {
    id: 5,
    name: 'huyen.vux_',
    avatar: '/assets/avatars/huyn.vux_.jpeg',
    hasStory: true,
  },
  {
    id: 6,
    name: 'sunnie.tr',
    avatar: '/assets/avatars/sunnie.tr.jpeg',
    hasStory: true,
  },
];

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});
