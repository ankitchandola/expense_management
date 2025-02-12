import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";

const ActionMenu: React.FC = () => {
  const dispatch = useDispatch();
  const menuOption = useSelector(
    (state: RootState) => state.pageConfig.actionOptions
  );
  const handleOptionClick = (action: (dispatch: AppDispatch) => void) => {
    action(dispatch);
  };
  const displayMenuOptions = menuOption.map((option, index) => (
    <button
      key={`menu-option-${index}`}
      className="border-1 border-neutral-300 p-2 rounded-lg"
      onClick={() => handleOptionClick(option.action)}
    >
      <img src={option.icon} alt="eye icon" />
    </button>
  ));
  return <div className="flex gap-3">{displayMenuOptions}</div>;
};

export default ActionMenu;
