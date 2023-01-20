import { User } from '@/types';
import { useState } from 'react';
import Story from './story';
import { useAppSelector } from '@/store/hooks';
import { selectUsers } from '@/store/user/selectors';

const StoryBar = () => {
  const stories = useAppSelector(selectUsers);
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
