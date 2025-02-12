import { IFormInput } from "@/types/global/formInput";
import { IDropdownOption } from "@/types/global/dropdownOption.d";

export interface IAddExpenditureModel {
  isOpen?: boolean;
  currentIndex?: number | null;
}
export interface IPageConfigReducer {
  actionOptions: IDropdownOption[];
  openExpenditureModel: boolean;
  openApproveModel: boolean;
  openRejectModel: boolean;
  tableFilterTabs: string[];
  filterFormMenu: IFormInput[];
  isTripleDotMenu: boolean;
  currentActiveModalType: "Add" | "View" | "Edit";
  addExpenditureModel: IAddExpenditureModel;
  openHambergerMenu: boolean;
}
