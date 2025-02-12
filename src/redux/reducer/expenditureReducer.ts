import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ICategory,
  IExpenditureReducer,
  IExpenseDetails,
} from "@/types/reducer/expenditureReducer";

const initialState: IExpenditureReducer = {
  expenseDetails: {
    employeeId: "1234",
    description: "",
    expenseDate: "",
    totalAmount: 0,
    notes: "",
  },
  categories: [],
  attachment: [],
};

const expenditure = createSlice({
  name: "expenditure",
  initialState,
  reducers: {
    setExpenseDetails: (state, action: PayloadAction<IExpenseDetails>) => {
      state.expenseDetails = {
        ...state.expenseDetails,
        ...action.payload,
      };
    },
    appendAttachment: (state, action: PayloadAction<string>) => {
      state.attachment = [...state.attachment, action.payload];
    },
    updateAttachmentAtIndex: (
      state,
      action: PayloadAction<{ index: number; file: string }>
    ) => {
      state.attachment[action.payload.index] = action.payload.file;
    },
    removeAttachmentFromIndex: (state, action: PayloadAction<number>) => {
      const index = action.payload;

      if (index >= 0 && index < state.attachment.length) {
        state.attachment.splice(index, 1);
      }
    },
    appendCategories: (state, action: PayloadAction<ICategory>) => {
      state.categories = [...state.categories, action.payload];
    },
    updateCategoriesAtIndex: (
      state,
      action: PayloadAction<{ index: number; data: ICategory }>
    ) => {
      state.categories[action.payload.index] = action.payload.data;
    },
    removeCategoriesFromIndex: (state, action: PayloadAction<number>) => {
      const index = action.payload;

      if (index >= 0 && index < state.categories.length) {
        state.categories.splice(index, 1);
      }
    },
    resetExpense: (state) => {
      state.expenseDetails = {
        ...initialState.expenseDetails,
      };
      state.attachment = [];
      state.categories = [];
    },
  },
});

export const {
  setExpenseDetails,
  appendAttachment,
  updateAttachmentAtIndex,
  removeAttachmentFromIndex,
  appendCategories,
  updateCategoriesAtIndex,
  removeCategoriesFromIndex,
  resetExpense,
} = expenditure.actions;
export default expenditure.reducer;
