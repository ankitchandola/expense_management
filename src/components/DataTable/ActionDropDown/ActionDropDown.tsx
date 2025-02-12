import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

const ActionDropDown: React.FC = () => {
  const dispatch = useDispatch();
  const menuOption = useSelector(
    (state: RootState) => state.pageConfig.actionOptions
  );
  const handleOptionClick = (action: (dispatch: AppDispatch) => void) => {
    action(dispatch);
  };
  const displayMenuOption = menuOption.map((option, index) => (
    <li
      key={`menu-option-${index}`}
      className="px-1.5 py-2 flex items-center gap-2.5 rounded-lg hover:bg-gray-100 cursor-pointer"
      onClick={() => handleOptionClick(option.action)}
    >
      <img src={option.icon} alt="menu-icon" />
      <p>{option.name}</p>
    </li>
  ));
  return (
    <div>
      <div className="py-2 px-2.5 absolute right-0 mt-2 w-36 bg-white border-1 border-slate-200 rounded-lg shadow-md z-10">
        <ul className="py-1">{displayMenuOption}</ul>
      </div>
    </div>
  );
};

export default ActionDropDown;
