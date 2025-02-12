import { AppDispatch } from "@/redux/store";

export interface IFormInput {
  name: string;
  placeholder: string;
  type: string;
  options?: IEmployeeOptionList[];
}
