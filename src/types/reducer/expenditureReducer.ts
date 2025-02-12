export interface IExpenseDetails {
  employeeId: string;
  description: string;
  expenseDate: string;
  totalAmount: number;
  notes: string;
}

export interface ICategory {
  type: string;
  date: string;
  amount: number;
  [key: string]: any;
}

export interface IExpenditureReducer {
  expenseDetails: IExpenseDetails;
  categories: ICategory[];
  attachment: string[];
  [key: string]: any;
}
