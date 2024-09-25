type Props = {
  label: string;
  size: 1 | 2 | 3;
  onClick?: () => void;
};

export const Button = ({ label, size, onClick }: Props) => {
  const sizes = {
    1: "h-10 text-md",
    2: "h-8 text-sm",
    3: "h-6 text-xs",
  };

  return (
    <div
      onClick={onClick}
      className={`flex justify-center items-center cursor-pointer bg-white text-black font-bold rounded-3xl ${sizes[size]}`}
    >
      {label}
    </div>
  );
};