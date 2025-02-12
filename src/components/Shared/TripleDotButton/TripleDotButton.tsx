import { ITripleDotButtonProps } from "./TripleDotButton.d";

const TripleDotButton: React.FC<ITripleDotButtonProps> = ({
  handleDropdownToggle,
  index,
  dropdownOpen,
  children,
}) => {
  return (
    <div className="relative">
      <button
        onClick={() => handleDropdownToggle(index)}
        className="border-1 border-neutral-300 p-2 rounded-lg"
      >
        <img src={"/icons/more.png"} alt="more icon" />
      </button>
      {dropdownOpen === index && children}
    </div>
  );
};

export default TripleDotButton;
