import { IInputProps } from "./Input.d";

const Input: React.FC<IInputProps> = ({
  label,
  type,
  name,
  onChange,
  onBlur,
  value,
  errors,
  disabled,
}) => {
  return (
    <div>
      <label className="font-medium text-sm">{label}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        disabled={disabled}
        className="py-2.5 px-3.5 border-neutral-200 border-1 rounded-lg font-normal text-base mt-1.5 w-full"
      />
      {errors?.[name] && (
        <div className="text-red-500 text-sm">{errors?.[name]}</div>
      )}
    </div>
  );
};

export default Input;
