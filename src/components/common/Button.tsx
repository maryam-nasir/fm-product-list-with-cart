type ButtonProps = {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const Button = ({ label, onClick, className = "" }: ButtonProps) => {
  return (
    <button
      className={`w-full h-10 flex items-center justify-center rounded-full text-sm font-semibold text-white bg-red hover:bg-redHover focus:outline-0 focus:bg-redHover ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
