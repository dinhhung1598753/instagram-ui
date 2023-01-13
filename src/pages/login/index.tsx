import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';
import { Input, Button } from '@/components';

const footerButtons = [
  'Meta',
  'About',
  'Blog',
  'Jobs',
  'Help',
  'API',
  'Privacy',
  'Terms',
  'Top Accounts',
  'Locations',
  'Instagram Lite',
  'Contact Uploading & Non-Users',
];

interface IIgScreenImage {
  id: number;
  className: string;
  src: string;
}

const igScreenImages: IIgScreenImage[] = [
  {
    id: 1,
    className: 'mt-7 mr-14 h-[540px] w-[255px] absolute transition-opacity duration-[2000ms]',
    src: '/assets/images/ig-screen-1.png',
  },
  {
    id: 2,
    className: 'mt-7 mr-14 h-[540px] w-[255px] absolute transition-opacity duration-[2000ms]',
    src: '/assets/images/ig-screen-2.png',
  },
  {
    id: 3,
    className: 'mt-7 mr-14 h-[540px] w-[255px] absolute transition-opacity duration-[2000ms]',
    src: '/assets/images/ig-screen-3.png',
  },
];

const index = () => {
  const [igScreens, setIgScreens] = useState<IIgScreenImage[]>(igScreenImages);
  const [activeItem, setActiveItem] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((preValue) => (preValue < 2 ? preValue + 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    setIgScreens(
      igScreenImages.map((item, i) => {
        return {
          ...item,
          className:
            activeItem === i ? item.className + ' opacity-100' : item.className + ' opacity-0',
        };
      }),
    );
  }, [activeItem]);
  return (
    <div className="h-full min-h-screen flex flex-col justify-end  bg-zinc-50">
      <div className="grow flex align-center justify-center items-center bg-white py-10 min-h-fit">
        <div className="bg-login-demo bg-cover  bg-no-repeat bg-center w-[465px] h-[635px] max-md:hidden">
          <div className="flex justify-end relative">
            {igScreens.map((screen) => (
              <Image
                key={screen.id}
                className={screen.className}
                src={screen.src}
                width={240}
                height={475}
                alt="Ig-screen"
              />
            ))}
          </div>
        </div>
        <div className=" w-[350px] h-[600px] mr-14">
          <div className="border-solid border border-zinc-300 flex flex-col items-center mb-2.5">
            <div className="mt-9 mb-3">
              <div>
                <i className="bg-[url('/assets/images/ig-logo-text.png')] w-44 h-14 inline-block bg-[center_top_134px]"></i>
              </div>
            </div>
            <div className="w-full mt-6">
              <div className="mb-1.5 mx-10">
                <Input key="1" placeholder="Phone number, username, or email"></Input>
              </div>
              <div className="mb-1.5 mx-10">
                <Input key="2" placeholder="Password"></Input>
              </div>
              <div className="mt-4 mx-10">
                <Button title="Login"></Button>
              </div>
              <div className="flex justify-center items-center mx-10">
                <div className="h-px border-t border-solid border-gray-300 w-full"></div>
                <div className="p-4 text-sm text-slate-400">OR</div>
                <div className="h-px border-t border-solid border-gray-300 w-full"></div>
              </div>
              <div className="flex justify-center hover:cursor-pointer">
                <Image
                  src="/assets/icons/square-facebook.svg"
                  alt="facebook"
                  width="15"
                  height="15"
                />
                <span className="pl-2 text-sm font-semibold text-sky-700">
                  Log in with Facebook
                </span>
              </div>
            </div>
            <div className="my-3">
              <div className="text-xs text-center text-cyan-800">
                <span className="hover:cursor-pointer">Forgot password?</span>
              </div>
            </div>
          </div>
          <div className="border-solid border border-zinc-300 flex flex-col items-center py-2.5">
            <div>
              <p className="text-sm m-4">
                Don't have an account?
                <span className="font-semibold text-sky-500 hover:cursor-pointer pl-1.5">
                  Sign up
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center my-2.5">
            <div className="my-2.5 mx-5">
              <span className="text-sm">Get the app.</span>
            </div>
            <div className="flex justify-center space-x-2 my-2.5">
              <Image
                src="/assets/images/app-store.png"
                width="135"
                height="40"
                alt="app-store-logo"
              />
              <Image
                src="/assets/images/ch-play.png"
                width="135"
                height="40"
                alt="app-store-logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-20 mb-14 text-zinc-400 text-xs">
        <div>
          <div className="flex justify-center pt-6 flex-wrap">
            {footerButtons.map((text) => (
              <div key={text} className="px-2">
                {text}
              </div>
            ))}
          </div>
          <div className="flex justify-center py-3">
            <div className="p-2">English</div>
            <div className="p-2">© 2023 Instagram from Newgate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
