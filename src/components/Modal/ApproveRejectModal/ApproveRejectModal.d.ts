import { IModalProps } from "../../../types/global/modal.d";

export interface IApproveRejectModalProps extends IModalProps {
  type: "Approve" | "Reject";
}
