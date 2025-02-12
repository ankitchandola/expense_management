import React from "react";
import Modal from "react-modal";
import { IApproveRejectModalProps } from "./ApproveRejectModal.d";
import Spacer from "@/components/Shared/Spacer/Spacer";
import TextArea from "@/components/Shared/TextArea/TextArea";
import SubmitButton from "@/components/Shared/SubmitButton/SubmitButton";

const ApproveRejectModal: React.FC<IApproveRejectModalProps> = ({
  isOpen,
  onRequestClose,
  type,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Expenditure Details"
      className="modal-content"
      overlayClassName="modal-overlay"
      ariaHideApp={false}
    >
      <div>
        <div className="flex justify-between items-center">
          <img
            src={"/icons/close-cross.png"}
            alt="close icon"
            className="cursor-pointer rounded-lg bg-slate-200 p-2"
            onClick={onRequestClose}
          />
        </div>
        <Spacer height={12} />
        <p className="font-medium font-2xl">
          Are you sure you want to {type} the claim?
        </p>
        <Spacer height={12} />
        <TextArea
          label="Remarks"
          value=""
          name="remarks"
          placeholder="Write here"
        />
        <Spacer height={12} />
        <div className="flex gap-3 w-full">
          <SubmitButton
            type="submit"
            value={`Yes, ${type}`}
            bgColor="blue-900"
            borderColor="blue-900"
            textColor="white"
          />
          <SubmitButton
            type="submit"
            value="Cancel"
            bgColor="neutral-300"
            borderColor="zinc-300"
            textColor="gray-700"
            onClick={onRequestClose}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ApproveRejectModal;
