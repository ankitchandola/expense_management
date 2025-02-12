import {
  IAddExpenditureModel,
  IPageConfigReducer,
} from "@/types/reducer/pageConfigReducer";
import { IFormInput } from "@/types/global/formInput.d";
import { IDropdownOption } from "@/types/global/dropdownOption";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IPageConfigReducer = {
  actionOptions: [],
  openExpenditureModel: false,
  openApproveModel: false,
  openRejectModel: false,
  tableFilterTabs: [],
  filterFormMenu: [],
  isTripleDotMenu: false,
  currentActiveModalType: "View",
  addExpenditureModel: {
    isOpen: false,
    currentIndex: null,
  },
  openHambergerMenu: false,
};

const pageConfig = createSlice({
  name: "pageConfig",
  initialState,
  reducers: {
    setActionOption: (state, action: PayloadAction<IDropdownOption[]>) => {
      state.actionOptions = action.payload;
    },
    setOpenExpenditureModel: (
      state,
      action: PayloadAction<{ status: boolean; type?: "Add" | "Edit" | "View" }>
    ) => {
      state.openExpenditureModel = action.payload.status;
      if (action.payload.type)
        state.currentActiveModalType = action.payload?.type;
    },
    setOpenApproveModel: (state, action: PayloadAction<boolean>) => {
      state.openApproveModel = action.payload;
    },
    setOpenRejectModel: (state, action: PayloadAction<boolean>) => {
      state.openRejectModel = action.payload;
    },
    setTableFilterTabs: (state, action: PayloadAction<string[]>) => {
      state.tableFilterTabs = action.payload;
    },
    setFilterFormMenu: (state, action: PayloadAction<IFormInput[]>) => {
      state.filterFormMenu = action.payload;
    },
    setIsTripleDotMenu: (state, action: PayloadAction<boolean>) => {
      state.isTripleDotMenu = action.payload;
    },
    setAddExpenditureModel: (
      state,
      action: PayloadAction<IAddExpenditureModel>
    ) => {
      state.addExpenditureModel = {
        ...state.addExpenditureModel,
        ...action.payload,
      };
    },
    setOpenHambergerMenu: (state) => {
      state.openHambergerMenu = !state.openHambergerMenu;
    },
  },
});

export const {
  setActionOption,
  setOpenExpenditureModel,
  setOpenApproveModel,
  setOpenRejectModel,
  setTableFilterTabs,
  setFilterFormMenu,
  setIsTripleDotMenu,
  setAddExpenditureModel,
  setOpenHambergerMenu,
} = pageConfig.actions;
export default pageConfig.reducer;
