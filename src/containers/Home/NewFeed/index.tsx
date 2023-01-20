import StoryBar from './StoryBar';
import PostCard from './Post';
import { useAppSelector } from '@/store/hooks';
import { selectPosts } from '@/store/post/selectors';

const NewFeed = () => {
  const posts = useAppSelector(selectPosts);
  return (
    <div className="mr-8 rounded-full">
      <StoryBar />
      <div className="mt-4">
        {posts.map((post) => (
          <div key={post.id} className="mb-3">
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewFeed;
