import React from "react";
import Modal from "react-modal";
import { IExpenditureModalProps } from "./ExpenditureModal.d";
import ExpenditureForm from "@/components/Forms/ExpenditureForm/ExpenditureForm";
import style from "./ExpenditureModal.style.module.css";
import Spacer from "@/components/Shared/Spacer/Spacer";
import {
  addExpenditureInputs,
  viewExpenditureInputs,
} from "@/utils/constants/expenditure.constants";
import { IExpenseDetails } from "@/types/reducer/expenditureReducer";
import { useDispatch, useSelector } from "react-redux";
import { setOpenExpenditureModel } from "@/redux/reducer/pageConfigReducer";
import { setExpenseDetails } from "@/redux/reducer/expenditureReducer";
import { createNewExpense } from "@/services/expense.service";
import { RootState } from "@/redux/store";

const ExpenditureModal: React.FC<IExpenditureModalProps> = ({
  isOpen,
  onRequestClose,
  title,
  type,
}) => {
  const dispatch = useDispatch();
  const expenditure = useSelector((state: RootState) => state.expenditure);
  const handleSubmit = async (values: IExpenseDetails) => {
    const _expenditure = {
      expenseDetails: {
        ...expenditure.expenseDetails,
        ...values,
      },
      categories: expenditure.categories,
      attachment: expenditure.attachment,
    };
    dispatch(setExpenseDetails(values));
    await createNewExpense(_expenditure);

    dispatch(setOpenExpenditureModel({ status: false }));
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title}
      className={`${style.mainWrapper} ${isOpen ? style.visible : ""}`}
      overlayClassName="modal-overlay"
      ariaHideApp={false}
    >
      <div className={`${style.formContainer} ${isOpen ? style.opened : ""}`}>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{title}</h2>
          <img
            src={"/icons/close-cross.png"}
            alt="close icon"
            className="cursor-pointer"
            onClick={onRequestClose}
          />
        </div>
        <Spacer height={32} />
        <ExpenditureForm
          // initialData
          formInputs={
            type === "View" || type === "Edit"
              ? viewExpenditureInputs
              : addExpenditureInputs
          }
          type={type}
          handleSubmit={handleSubmit}
        />
      </div>
    </Modal>
  );
};

export default ExpenditureModal;
