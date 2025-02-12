import Spacer from "../Spacer/Spacer";
import { ITextAreaProps } from "./TextArea.d";

const TextArea: React.FC<ITextAreaProps> = ({
  label,
  name,
  value,
  disabled,
  onChange,
  placeholder,
}) => {
  return (
    <div>
      <label className="font-normal text-sm">{label}</label>
      <Spacer height={4} />
      <div
        className={`py-3 px-3.5 rounded-lg ${
          disabled ? "bg-neutral-200" : ""
        } border-1 border-neutral-200`}
      >
        <textarea
          className="w-full font-normal text-base text-neutral-500 min-h-32"
          value={value}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
        />
      </div>
    </div>
  );
};

export default TextArea;
