import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { IAddExpenditureModalProps } from "./AddExpenditureModal";
import Spacer from "@/components/Shared/Spacer/Spacer";
import AddNewRecordForm from "@/components/Forms/AddNewRecordForm/AddNewRecordForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { IAddNewRecordForm } from "@/types/global/expenditure";
import {
  appendCategories,
  updateCategoriesAtIndex,
} from "@/redux/reducer/expenditureReducer";
import { setAddExpenditureModel } from "@/redux/reducer/pageConfigReducer";

const AddExpenditureModal: React.FC<IAddExpenditureModalProps> = ({
  isOpen,
  onRequestClose,
  title,
}) => {
  const dispatch = useDispatch();
  const index = useSelector(
    (state: RootState) => state.pageConfig.addExpenditureModel.currentIndex
  );
  const category = useSelector((state: RootState) =>
    index !== null ? state.expenditure.categories[index || 0] : {}
  );

  const handleSubmit = (values: IAddNewRecordForm) => {
    if (index) {
      dispatch(updateCategoriesAtIndex({ index, data: values }));
    } else {
      dispatch(appendCategories(values));
    }

    dispatch(setAddExpenditureModel({ isOpen: false, currentIndex: null }));
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title}
      className="modal-content !w-[500px]"
      overlayClassName="modal-overlay"
      ariaHideApp={false}
    >
      <div>
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
        <AddNewRecordForm initialData={category} handleSubmit={handleSubmit} />
      </div>
    </Modal>
  );
};

export default AddExpenditureModal;
