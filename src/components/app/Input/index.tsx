import { useEffect } from 'react';
import { ChangeEvent, useState } from 'react';

interface IProps {
  value?: string | number;
  placeholder?: string;
}

const Input = (props: IProps) => {
  const [value, setValue] = useState<string | number>(props.value ? props.value : '');
  const [spanClass, setSpanClass] = useState<string>();
  const [inputClass, setInputClass] = useState<string>();
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    if (value) {
      setSpanClass('text-xs absolute left-2 right-0 text-slate-400  -translate-y-2.5');
      setInputClass('pt-2.5 pl-2 border-none w-full focus-visible:outline-0 rounded-md');
    } else {
      setSpanClass('text-xs absolute left-2 text-slate-400');
      setInputClass('py-1.5 pl-2 border-none w-full focus-visible:outline-0 rounded-md');
    }
  }, [value]);
  return (
    <div className="border-solid border border-zinc-300 rounded-sm h-10">
      <label className="flex items-center relative">
        <span className={spanClass}>{props.placeholder}</span>
        <input className={inputClass} value={value} onChange={handleChangeValue} />
      </label>
    </div>
  );
};

export default Input;
