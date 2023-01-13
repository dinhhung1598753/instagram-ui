import Image from 'next/image';
import { Avatar } from '@/components';

const Post = () => {
  const avtSrc = '/assets/avatars/thuy-tien-avt.jpeg';
  return (
    <div className="w-[472px] border rounded-md">
      <div className="w-full h-[56px] flex justify-between">
        <div className="flex items-center ml-3">
          <div>
            <Avatar src={avtSrc} alt="avt" size={32} hasStory />
          </div>
          <div className="ml-2">
            <div className="text-sm font-medium">
              <span>tienng12</span>
            </div>
            <div className="text-xs font-light">
              <span>Bangkok</span>
            </div>
          </div>
        </div>
        <div className="flex items-center mr-1">
          <div className="p-2">
            <Image src="assets/icons/action.svg" width="20" height="20" alt="More action" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <img src="/assets/posts/thuy-tien-1.jpeg" alt="post" />
        </div>
      </div>
      <div>
        <div>
          <div className="flex">
            <div className="p-2 mt-1">
              <Image src="assets/icons/like.svg" width="24" height="24" alt="Like" />
            </div>
            <div className="p-2 mt-1">
              <Image src="assets/icons/message.svg" width="24" height="24" alt="Message" />
            </div>
            <div className="p-2 mt-1">
              <Image src="assets/icons/share.svg" width="24" height="24" alt="Share" />
            </div>
            <div className="grow flex justify-end p-2 mt-1">
              <Image src="assets/icons/save.svg" width="24" height="24" alt="Save" />
            </div>
          </div>

          <div className="px-2 pb-2">
            <span className="text-sm font-semibold"> 100 likes</span>
          </div>
          <div className="px-2">
            <div className="flex flex-col">
              <div className="text-sm">
                <span className="font-semibold">sunnie.tr </span>
                <span>thank @dottie.store for this pretty gift, a stunning dress ✨</span>
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
                  <span className="font-semibold text-sky-600">Post</span>
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
