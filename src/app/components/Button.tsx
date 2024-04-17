interface ButtonType {
  onClick: React.MouseEventHandler;
  otherStyles: string;
  children: string;
}

function Button({ onClick, otherStyles, children }: ButtonType) {
  return (
    <button
      className={`${otherStyles} shadow-buttonShadow p-1 border-2 border-black border-solid hover:shadow-none hover:translate-x-1 duration-200 ease-in-out`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
