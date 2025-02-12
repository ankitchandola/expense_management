import {
  IEmployeeExpenseView,
  IAddExpenditure,
} from "@/types/global/expenditure";
import { addExpenditureSchema } from "./ExpenditureSchema";
import {
  addExpenditureInputs,
  viewExpenditureInputs,
} from "@/utils/constants/expenditure.constants";
import { IExpenseDetails } from "@/types/reducer/expenditureReducer";

export interface IFormValuesProps {
  initialData?: IAddExpenditure | IEmployeeExpenseView;
  type: "View" | "Edit" | "Add";
  schema?: typeof addExpenditureSchema;
  handleSubmit: (values: IExpenseDetails) => void;
  formInputs: typeof addExpenditureInputs | typeof viewExpenditureInputs;
}
