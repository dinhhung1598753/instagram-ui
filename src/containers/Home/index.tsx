import Header from '@/layout/Header';
import NewFeed from './NewFeed';
import Info from './Info';
import Head from 'next/head';
import { User } from '@/types';
import { useState } from 'react';

const users: User[] = [
  {
    id: 1,
    name: 'klynzii',
    avatar: 'assets/images/avatars/klynzii.jpeg',
    hasStory: true,
  },
  {
    id: 2,
    name: '_dcat1811',
    avatar: 'assets/images/avatars/_dcat1811.jpeg',
    hasStory: true,
  },
  {
    id: 3,
    name: '_h.nhu.01',
    avatar: 'assets/images/avatars/_h.nhu.01.jpeg',
    hasStory: true,
  },
  {
    id: 4,
    name: 'cas.naf',
    avatar: 'assets/images/avatars/cas.naf.jpeg',
    hasStory: true,
  },
  {
    id: 5,
    name: 'huyen.vux_',
    avatar: 'assets/images/avatars/huyen.vux_.jpeg',
    hasStory: true,
  },
  {
    id: 6,
    name: 'sunnie.tr',
    avatar: 'assets/images/avatars/sunnie.tr.jpeg',
    hasStory: true,
  },
];

export default function Home() {
  const stories = useState(users);
  return (
    <div>
      <Head>
        <title>Instagram</title>
      </Head>
      <Header />
      <div className="flex justify-center mt-20 mb-5">
        <div>
          <NewFeed />
        </div>
        <div className="hidden lg:block">
          <Info />
        </div>
      </div>
    </div>
  );
}
