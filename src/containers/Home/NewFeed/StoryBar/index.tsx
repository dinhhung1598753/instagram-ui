import { User } from '@/types';
import { useState } from 'react';
import Story from './story';

const users: User[] = [
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

const StoryBar = () => {
  const [stories, setStories] = useState<User[]>(users);

  return (
    <div className="h-[117px] w-[470px] border rounded-md py-4 overflow-hidden">
      <div className="flex gap-x-4 w-max">
        <div className="w-1"></div>
        {stories.map((story: User, index) => (
          <Story key={story.id} name={story.name} avatar={story.avatar} />
        ))}
      </div>
    </div>
  );
};

export default StoryBar;
