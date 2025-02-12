import apiClient from "@/lib/apiClient";
import { IExpenditureReducer } from "@/types/reducer/expenditureReducer";
import { base64ToBlob } from "@/utils/blobConverter";

export const createNewExpense = async (expenditure: IExpenditureReducer) => {
  const { expenseDetails, categories, attachment } = expenditure;
  const formData = new FormData();
  formData.append(
    "expenseDetails",
    JSON.stringify({
      employeeId: expenseDetails.employeeId,
      description: expenseDetails.description,
      expenseDate: expenseDetails.expenseDate,
      totalAmount: categories.reduce(
        (total, category) => total + category.amount,
        0
      ),
      notes: expenseDetails.notes,
    })
  );

  categories.forEach((category, index) => {
    formData.append(
      `categories[${index}].value`,
      JSON.stringify({
        type: category.type,
        date: category.date,
        amount: category.amount,
      })
    );
  });

  attachment.forEach((attachment, index) => {
    const _blob = base64ToBlob(attachment);
    formData.append(`categories[${index}].attachment`, _blob, "files.zip");
  });

  try {
    const response = await apiClient.post("/expenses/me", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error creating new expense:", error);
    throw error;
  }
};

export const getExpenses = async (
  employeeId: string,
  status: string,
  offset: number = 0,
  count: number = 10
) => {
  try {
    const url = `/expenses/me?employeeId=1234&status=${status}&offset=${offset}&count=${count}`;
    const response = await apiClient.get(url);
    const { expenses, expensesSummary } = response.data;
    const payload = {
      data: expenses,
      total: expensesSummary.total,
    };
    return payload;
  } catch (error) {
    console.error("Error fetching expenses:", error);
    throw error;
  }
};
