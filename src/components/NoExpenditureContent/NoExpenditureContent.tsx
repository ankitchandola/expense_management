import SubmitButton from "@/components/Shared/SubmitButton/SubmitButton";
import { useDispatch } from "react-redux";
import { setAddExpenditureModel } from "@/redux/reducer/pageConfigReducer";

const NoExpenditureContent = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-2 my-20">
      <div className="bg-blue-100 rounded-lg w-9 h-9 m-auto flex items-center justify-center">
        <img
          src={"/icons/stickynote.svg"}
          alt="sticky note icon"
          className="w-5 h-5"
        />
      </div>
      <p className="font-medium text-base text-center">
        No Expenditure added Yet !!
      </p>
      <p className="font-light text-xs text-neutral-500 text-center">
        Add expenditure to submit your expense claims.
      </p>
      <div className="w-2/12 m-auto">
        <SubmitButton
          type="submit"
          value={`Add New`}
          bgColor="blue-900"
          borderColor="blue-900"
          textColor="white"
          icon={"/icons/plus.png"}
          onClick={() =>
            dispatch(
              setAddExpenditureModel({ isOpen: true, currentIndex: null })
            )
          }
        />
      </div>
    </div>
  );
};

export default NoExpenditureContent;
