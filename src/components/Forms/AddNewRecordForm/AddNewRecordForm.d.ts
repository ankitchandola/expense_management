import { IAddNewRecordForm } from "../../../types/global/expenditure";
import { addNewRecordSchema } from "./AddNewRecordSchema";

export interface IAddNewRecordFormData {
  initialData?: IAddNewRecordForm | {};
  schema?: typeof addNewRecordSchema;
  handleSubmit: (values: IAddNewRecordForm) => void;
}
