interface InputType {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  value: string;
}

function Input({ onChange, placeholder, value }: InputType) {
  return (
    <input
      className={`border-2 border-black border-solid w-full px-2 py-1`}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    ></input>
  );
}

export default Input;
