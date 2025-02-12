import { ISubmitButtonProps } from "./SubmitButton.d";

const SubmitButton: React.FC<ISubmitButtonProps> = ({
  type,
  value,
  disabled,
  bgColor,
  borderColor,
  textColor,
  onClick,
  icon,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`w-full py-2.5 px-4 bg-${bgColor} rounded-lg border-1 border-${borderColor} text-${textColor} text-base font-normal`}
      onClick={onClick}
    >
      <div className="flex gap-2 justify-center items-center">
        {icon && <img src={icon} alt="icon" />}

        <p>{value}</p>
      </div>
    </button>
  );
};

export default SubmitButton;
