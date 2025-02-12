import {
  IAddExpenditure,
  IEmployeeExpenseView,
} from "@/types/global/expenditure";
import { IModalProps } from "@/types/global/modal";

export interface IExpenditureModalProps extends IModalProps {
  title: string;
  type: "View" | "Edit" | "Add";
}
