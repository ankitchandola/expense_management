import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";
import { IFormValuesProps } from "./ExpenditureForm.d";
import { addExpenditureSchema } from "./ExpenditureSchema";
import ExpenditureList from "@/components/ExpenditureList/ExpenditureList";
import TextArea from "@/components/Shared/TextArea/TextArea";
import Spacer from "@/components/Shared/Spacer/Spacer";
import SubmitButton from "@/components/Shared/SubmitButton/SubmitButton";
import {
  IAddExpenditure,
  IEmployeeExpenseView,
} from "@/types/global/expenditure";
import Input from "@/components/Shared/Input/Input";

const Form = (
  props: FormikProps<IEmployeeExpenseView | IAddExpenditure> & IFormValuesProps
) => {
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    formInputs,
    type,
  } = props;

  const displayFormInputs = formInputs.map((input, index) => (
    <div className="w-[48%]">
      <Input
        key={`expenditure-input-${index}`}
        label={input.label}
        type={input.type}
        name={input.name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values?.[input.name] || ""}
        errors={errors}
        disabled={type === "View" ? true : false}
      />
    </div>
  ));

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap gap-4 justify-between">
        {displayFormInputs}
      </div>
      <ExpenditureList type={type} />
      <Spacer height={8} />
      <TextArea
        label="Remarks"
        value={values.notes}
        disabled={type === "View" ? true : false}
        name="notes"
        onChange={handleChange}
      />
      <Spacer height={32} />
      <div className="flex gap-3 w-full justify-end">
        <div className={"w-2/12"}>
          <SubmitButton
            type="button"
            value={type === "View" ? `Reject` : "Cancel"}
            bgColor="white"
            borderColor="zinc-300"
            textColor="gray-700"
          />
        </div>
        <div className={"w-2/12"}>
          <SubmitButton
            type="submit"
            value={type === "View" ? `Approve` : "Submit claim"}
            bgColor="blue-900"
            borderColor="blue-900"
            textColor="white"
          />
        </div>
      </div>
    </form>
  );
};

const ExpenditureForm = withFormik<IFormValuesProps, any>({
  mapPropsToValues: (props) =>
    props.initialData || {
      description: "",
      expenseDate: "",
      notes: "",
    },

  validationSchema: (props: { type: string }) =>
    props.type === "View"
      ? Yup.object().shape({})
      : Yup.object().shape(addExpenditureSchema),

  handleSubmit: (values, { props }) => {
    props.handleSubmit(values);
  },
})(Form);

export default ExpenditureForm;
