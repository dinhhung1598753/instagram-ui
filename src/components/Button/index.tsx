interface IProps {
  title: string;
  placeholder?: string;
}

const Button = (props: IProps) => {
  return (
    <div className="flex justify-center items-center border-solid border rounded-lg text-sm  hover:cursor-pointer bg-sky-500 h-8 text-white font-medium">
      <span>{props.title}</span>
    </div>
  );
};

export default Button;
