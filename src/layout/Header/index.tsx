import Image from 'next/image';
import Search from './search';
import { Avatar } from '@/components';

interface HeaderProps {}

const Header = () => {
  const avtSrc = '/assets/avatars/thuy-tien-avt.jpeg';
  return (
    <div className="h-[60px] w-full border flex flex-col items-center justify-center fixed top-0 bg-white">
      <div className="flex max-w-[980px] w-full">
        <div className="flex-[1_0_127px]">
          <div className="mt-2">
            <Image
              src="/assets/icons/instagram-logo.svg"
              width="103"
              height="29"
              alt="instagram-logo"
              className="pointer"
            />
          </div>
        </div>
        <div className="w-72 h-9 flex-initial">
          <Search />
        </div>
        <div className="flex  flex-[1_0_127px] items-center justify-end">
          <div>
            <Image
              src="/assets/icons/home.svg"
              width="24"
              height="24"
              alt="home"
              className="pointer"
            />
          </div>
          <div className="ml-6">
            <Image
              src="/assets/icons/messenger.svg"
              width="24"
              height="24"
              alt="messenger"
              className="pointer"
            />
          </div>
          <div className="ml-6">
            <Image
              src="/assets/icons/plus-outline.svg"
              width="24"
              height="24"
              alt="plus"
              className="pointer"
            />
          </div>
          <div className="ml-6">
            <Image
              src="/assets/icons/find.svg"
              width="24"
              height="24"
              alt="find"
              className="pointer"
            />
          </div>
          <div className="ml-6">
            <Image
              src="/assets/icons/heart.svg"
              width="24"
              height="24"
              alt="heart"
              className="pointer"
            />
          </div>
          <div className="ml-6">
            <Avatar src={avtSrc} alt="avt" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
