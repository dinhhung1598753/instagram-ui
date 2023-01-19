import Image from 'next/image';
interface StoryProps {
  name: string;
  avatar: string;
}

const Story = (props: StoryProps) => {
  return (
    <div>
      <div>
        <div>
          <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full p-0.5">
            <div className="p-0.5 rounded-full bg-white">
              <Image
                className="rounded-full"
                src={props.avatar}
                height="56"
                width="56"
                alt="user avatar"
              />
            </div>
          </div>
        </div>
        <div className="text-center text-xs pt-1">
          <span>{props.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Story;
