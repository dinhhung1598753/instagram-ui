import { ChangeEvent, useState } from 'react';
import classnames from 'classnames';

const Search = () => {
  const [value, setValue] = useState<string | number>('');
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className=" rounded-md h-full">
      <div className="h-full ">
        <label className="flex items-center relative">
          <span className={classnames('absolute left-2 text-slate-400', { hidden: !!value })}>
            Search
          </span>
          <input
            className="py-1.5 pl-2 border-none w-full focus-visible:outline-0 rounded-md bg-gray-100"
            value={value}
            onChange={handleChangeValue}
          />
        </label>
      </div>
    </div>
  );
};

export default Search;
