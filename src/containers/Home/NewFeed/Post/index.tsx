import Image from 'next/image';
import { Avatar } from '@/components';
import { Post } from '@/types';
import { useEffect, useState } from 'react';
import classnames from 'classnames';

const Post = (props: Post) => {
  const [shownImageIndex, setShownImageIndex] = useState(0);
  const [imageSrc, setImageSrc] = useState(props.images[0]);
  useEffect(() => {
    setImageSrc(props.images[shownImageIndex]);
  }, [shownImageIndex]);
  const decrement = () => {
    setShownImageIndex((pre) => {
      if (pre === 0) {
        return pre;
      }
      return pre - 1;
    });
  };
  const increment = () => {
    setShownImageIndex((pre) => {
      if (pre < props.images.length - 1) {
        return pre + 1;
      }
      return pre;
    });
  };
  return (
    <div className="w-[472px] border rounded-md">
      <div className="w-full h-[56px] flex justify-between">
        <div className="flex items-center ml-3">
          <div className="pointer">
            <Avatar
              src={props.author.avatar}
              alt="avt"
              size={32}
              hasStory={props.author.hasStory}
            />
          </div>
          <div className="ml-2">
            <div className="text-sm font-medium pointer">
              <span>{props.author.name}</span>
            </div>
            <div className="text-xs font-light">
              <span>{props.location}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center mr-1 pointer">
          <div className="p-2">
            <Image src="assets/icons/action.svg" width="20" height="20" alt="More action" />
          </div>
        </div>
      </div>
      <div>
        <div className="relative flex overflow-x-hidden">
          <img src={imageSrc} alt="post" />
          <div className="absolute w-full h-full">
            <div
              className={classnames(
                'p-1 w-6 h-6 m-2 flex justify-center bg-slate-50  rounded-full absolute top-0 bottom-0 my-auto left-0 hover:cursor-pointer',
                { hidden: !shownImageIndex },
              )}
              onClick={decrement}
            >
              <Image
                src="assets/icons/chevron-left-solid.svg"
                width="12"
                height="12"
                alt="chevron-left-solid"
              />
            </div>
            <div
              className={classnames(
                ' p-1 w-6 h-6 m-2 flex justify-center bg-slate-50  rounded-full absolute top-0 bottom-0 my-auto right-0 hover:cursor-pointer',
                { hidden: shownImageIndex === props.images.length - 1 },
              )}
              onClick={increment}
            >
              <Image
                src="assets/icons/chevron-right-solid.svg"
                width="12"
                height="12"
                alt="chevron-right-solid"
              />
            </div>
            <div className="flex justify-center absolute bottom-0 left-0 right-0 mb-2 gap-1">
              {props.images.map((image, index) => (
                <div
                  className={classnames('rounded-full w-2 h-2', {
                    ' bg-gray-400': index !== shownImageIndex,
                    'bg-gray-50': index === shownImageIndex,
                  })}
                  key={index}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="flex">
            <div className="p-2 mt-1">
              <Image
                src="assets/icons/like.svg"
                width="24"
                height="24"
                alt="Like"
                className="pointer"
              />
            </div>
            <div className="p-2 mt-1">
              <Image
                src="assets/icons/message.svg"
                width="24"
                height="24"
                alt="Message"
                className="pointer"
              />
            </div>
            <div className="p-2 mt-1">
              <Image
                src="assets/icons/share.svg"
                width="24"
                height="24"
                alt="Share"
                className="pointer"
              />
            </div>
            <div className="grow flex justify-end p-2 mt-1">
              <Image
                src="assets/icons/save.svg"
                width="24"
                height="24"
                alt="Save"
                className="pointer"
              />
            </div>
          </div>

          <div className="px-2 pb-2">
            <span className="text-sm font-semibold"> 100 likes</span>
          </div>
          <div className="px-2">
            <div className="flex flex-col">
              <div className="text-sm">
                <span className="font-semibold pointer">{props.author.name} </span>
                <span>{props.title}</span>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="text-sm">
              <span className="text-gray-400"> 5 hours ago </span>
            </div>
          </div>
          <div className="mt-2">
            <div className="border-t px-2">
              <div className="flex items-center h-full">
                <div className="py-2 pr-3">
                  <Image src="assets/icons/icon.svg" width="24" height="24" alt="Icon" />
                </div>
                <div className="grow">
                  <span className="text-gray-300 text-sm">Add a comment</span>
                </div>
                <div className="opacity-50">
                  <span className="font-semibold text-sky-600 pointer">Post</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
