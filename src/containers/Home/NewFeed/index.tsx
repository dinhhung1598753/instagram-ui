import StoryBar from './StoryBar';
import Post from './Post';

const NewFeed = () => {
  return (
    <div className="mr-8 rounded-full">
      <StoryBar />
      <div className="mt-4">
        <Post />
      </div>
    </div>
  );
};

export default NewFeed;
