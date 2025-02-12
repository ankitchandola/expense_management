import * as Yup from "yup";

export const addNewRecordSchema = {
  type: Yup.string().required(),
  date: Yup.string().required(),
  amount: Yup.number().required(),
};
