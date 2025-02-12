import * as Yup from "yup";

export const addExpenditureSchema = {
  description: Yup.string().required(),
  expenseDate: Yup.string().required(),
  notes: Yup.string().optional(),
};
