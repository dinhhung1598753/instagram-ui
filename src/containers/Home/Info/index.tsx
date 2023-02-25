import { Avatar } from '@/components';

type Suggestion = {
  id: number;
  name: string;
  avatarPath: string;
  content: string;
};

interface IProps {
  suggestions: Suggestion[];
}

const Info = (props: IProps) => {
  const avtSrc = '/assets/avatars/me.jpg';
  const suggestions = props.suggestions;
  return (
    <div className="pt-20 w-80">
      <div className="my-2">
        <div className="flex items-center">
          <Avatar src={avtSrc} alt="avt" size={56} />
          <div className="grow ml-2">
            <div className="font-medium">js.20.12</div>
            <div className="text-gray-400">—&gt;</div>
          </div>
          <div className="text-sky-600 font-semibold text-sm">Switch</div>
        </div>
      </div>
      <div className="mb-5">
        <div className="flex justify-between">
          <span className="text-sm text-gray-500 font-semibold">Suggestions For You</span>
          <span className="text-xs  font-semibold">See all</span>
        </div>
        <div>
          <div className="flex flex-col">
            {suggestions &&
              suggestions.map((suggestion) => (
                <div className="w-full py-2" key={suggestion.id}>
                  <div className="flex items-center w-full">
                    <Avatar src={suggestion.avatarPath} alt="avt" size={32} />
                    <div className="grow ml-2">
                      <div className="font-medium text-sm">{suggestion.name}</div>
                      <div className="text-gray-400 text-xs">{suggestion.content}</div>
                    </div>
                    <div className="text-sky-600 font-semibold text-xs">Follow</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div>
        <nav>
          <ul className="flex flex-wrap text-xs text-gray-300 font-medium mb-3">
            <li className="after:content-['\00B7'] after:m-1">
              <span>About</span>
            </li>
            <li className="after:content-['\00B7'] after:m-1">
              <span>Help</span>
            </li>
            <li className="after:content-['\00B7'] after:m-1">
              <span>Press</span>
            </li>
            <li className="after:content-['\00B7'] after:m-1">
              <span>API</span>
            </li>
            <li className="after:content-['\00B7'] after:m-1">
              <span>Jobs</span>
            </li>
            <li className="after:content-['\00B7'] after:m-1">
              <span>Privacy</span>
            </li>
            <li className="after:content-['\00B7'] after:m-1">
              <span>Terms</span>
            </li>
            <li className="after:content-['\00B7'] after:m-1">
              <span>Locations</span>
            </li>
            <li className="after:content-['\00B7'] after:m-1">
              <span>Language</span>
            </li>
          </ul>
        </nav>
        <span className="text-xs text-gray-300">© 2023 INSTAGRAM FROM META</span>
      </div>
    </div>
  );
};

export default Info;
