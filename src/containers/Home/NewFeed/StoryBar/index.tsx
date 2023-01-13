import Story from './story';

const StoryBar = () => {
  const stories = [1, 2, 3, 4, 5, 6];
  return (
    <div className="h-[117px] w-[470px] border rounded-md py-4 overflow-hidden">
      <div className="flex gap-x-4 w-max">
        <div className="w-2"></div>
        {stories.map((story, index) => (
          <Story key={story} />
        ))}
      </div>
    </div>
  );
};

export default StoryBar;
