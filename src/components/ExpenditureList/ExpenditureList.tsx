import {
  expenditureHeader,
  sampleExpenditureData,
} from "@/utils/constants/expenditure.constants";
import NoExpenditureContent from "@/components/NoExpenditureContent/NoExpenditureContent";
import { IExpenditureListProps } from "./ExpenditureList.d";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setAddExpenditureModel } from "@/redux/reducer/pageConfigReducer";
import {
  removeAttachmentFromIndex,
  removeCategoriesFromIndex,
} from "@/redux/reducer/expenditureReducer";

const ExpenditureList: React.FC<IExpenditureListProps> = ({ type }) => {
  // const attachments = useSelector(
  //   (state: RootState) => state.expenditure.attachment
  // );
  const categories = useSelector(
    (state: RootState) => state.expenditure.categories
  );
  const dispatch = useDispatch();
  const displayHeaders = expenditureHeader.map((item, index) => (
    <th
      key={`expenditure-header-${index}`}
      className="border-b-1 border-t-1 border-gray-200 py-3 px-6 bg-gray-50 font-normal text-sm text-neutral-500 text-left"
    >
      {item.name}
    </th>
  ));
  const displayBody = categories.map((data, index) => (
    <tr key={`expenditure-body-${index}`}>
      {expenditureHeader.map((header) => (
        <td className="py-3 px-6 border-b-1 border-slate-200 font-normal text-sm text-zinc-900">
          {header.id !== "action" ? (
            data?.[header.id]
          ) : type === "View" ? (
            <img
              src={"/icons/eye.svg"}
              alt="eye icon"
              className="rounded-lg border-1 border-neutral-300 p-2"
            />
          ) : (
            <div className="flex gap-3 items-center">
              <img
                src={"/icons/edit.svg"}
                alt="edit icon"
                className="rounded-lg border-1 border-neutral-300 p-2"
                onClick={() => openCloseAddForm(true, index)}
              />
              <img
                src="/icons/close-cross.svg"
                alt="close icon"
                className="rounded-lg border-1 border-neutral-300 p-2"
                onClick={() => removeRecord(index)}
              />
            </div>
          )}
        </td>
      ))}
    </tr>
  ));
  const removeRecord = (index: number) => {
    dispatch(removeCategoriesFromIndex(index));
    dispatch(removeAttachmentFromIndex(index));
  };
  const openCloseAddForm = (isOpen: boolean, currentIndex?: number | null) => {
    dispatch(setAddExpenditureModel({ isOpen, currentIndex }));
  };
  return (
    <div>
      <div className="border-1 border-amber-50 py-5 flex justify-between">
        <p className="font-normal text-base">Expenditure List</p>
        <p
          className="font-normal text-base text-blue-900 cursor-pointer"
          onClick={() => openCloseAddForm(true, null)}
        >
          + Add new
        </p>
      </div>
      {categories.length === 0 ? (
        <NoExpenditureContent />
      ) : (
        <>
          <table className="table-auto w-full rounded-b-lg">
            <thead>
              <tr>{displayHeaders}</tr>
            </thead>
            <tbody>{displayBody}</tbody>
          </table>
          <div className="flex justify-between border-b-1 border-neutral-200 py-3 px-6 bg-neutral-100 font-normal text-sm text-gray-900">
            <p>Total Expense</p>
            <p>
              $
              {categories.reduce(
                (total, category) => total + category.amount,
                0
              )}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ExpenditureList;
