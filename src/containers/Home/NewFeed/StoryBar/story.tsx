import Image from 'next/image';
interface StoryProps {}

const Story = () => {
  const imageSrc = '/assets/avatars/avt.jpeg';
  return (
    <div>
      <div>
        <div>
          <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full p-0.5">
            <div className="p-0.5 rounded-full bg-white">
              <Image
                className="rounded-full"
                src={imageSrc}
                height="64"
                width="64"
                alt="user avatar"
              />
            </div>
          </div>
        </div>
        <div className="text-center text-xs pt-1">
          <span>name</span>
        </div>
      </div>
    </div>
  );
};

export default Story;
