import { IExpenditureListData } from "@/types/global/expenditure";

export const expenditureHeader = [
  {
    id: "type",
    name: "Expenditure On",
  },
  {
    id: "date",
    name: "Date",
  },
  {
    id: "amount",
    name: "Amount",
  },
  {
    id: "action",
    name: "Action",
  },
];

export const sampleExpenditureData: IExpenditureListData[] = [
  {
    id: 1,
    expenditureOn: "lunch",
    date: "12/12/2025",
    amount: "$123",
    action: "https://www.freepik.com/photos/cute-panda",
  },
  {
    id: 2,
    expenditureOn: "lunch",
    date: "12/12/2025",
    amount: "$123",
    action: "https://www.freepik.com/photos/cute-panda",
  },
  {
    id: 3,
    expenditureOn: "lunch",
    date: "12/12/2025",
    amount: "$123",
    action: "https://www.freepik.com/photos/cute-panda",
  },
];

export const viewExpenditureInputs = [
  {
    name: "employee_name",
    label: "Employee name",
    type: "text",
    disabled: true,
  },
  {
    name: "details_of_expenditure",
    label: "Details of Expenditure",
    type: "text",
    disabled: true,
  },
  {
    name: "claimed_date",
    label: "Claimed Date",
    type: "date",
    disabled: true,
  },
  {
    name: "employee_user_id",
    label: "Employee User ID",
    type: "text",
    disabled: true,
  },
];

export const addExpenditureInputs = [
  {
    name: "expenseDate",
    label: "Claimed Date",
    type: "date",
    disabled: true,
  },
  {
    name: "description",
    label: "Description",
    type: "text",
    disabled: true,
  },
];

const defaultOptions = [
  {
    id: 1,
    name: "Travel",
  },
  {
    id: 2,
    name: "Accomodation",
  },
  {
    id: 3,
    name: "Food",
  },
  {
    id: 4,
    name: "Others",
  },
];

export const addNewRecordInputs = [
  {
    name: "type",
    label: "Expenditure on",
    type: "combobox",
    placeholder: "Select from list",
    options: defaultOptions,
    disabled: true,
  },
  {
    name: "description",
    label: "Description",
    type: "text",
    disabled: true,
  },
  {
    type: "date",
    placeholder: "Select date",
    name: "date",
    label: "Date",
    disabled: true,
    widthSize: "half",
  },
  {
    name: "amount",
    label: "Amount",
    type: "number",
    disabled: true,
    widthSize: "half",
  },
];
