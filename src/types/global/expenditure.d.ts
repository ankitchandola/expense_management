export interface IExpenditureListData {
  [key: string]: any;
}

export interface IEmployeeExpenseView {
  employeeName: string;
  expenditureOn: string;
  claimedDate: string;
  employeeUserId: string;
  viewExpenditureInputs: any;
  [key: string]: string;
}

export interface IAddExpenditure {
  description: string;
  expenseDate: string;
  notes?: string;
  [key: string]: string | undefined;
}

export interface IAddNewRecordForm {
  type: string;
  date: string;
  amount: number;
  [key: string]: string | undefined;
}
