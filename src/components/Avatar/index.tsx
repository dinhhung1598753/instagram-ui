import classnames from 'classnames';
import Image from 'next/image';
interface AvatarProps {
  src: string;
  size: number;
  alt: string;
  hasStory?: boolean;
}

const Avatar = (props: AvatarProps) => {
  const classes = props.hasStory
    ? 'bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full p-0.5'
    : '';
  return (
    <div className={classes}>
      <div className="p-0.5 rounded-full bg-white pointer">
        <Image
          className="rounded-full"
          src={props.src}
          height={props.size}
          width={props.size}
          alt="user avatar"
        />
      </div>
    </div>
  );
};

export default Avatar;
