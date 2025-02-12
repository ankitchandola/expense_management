export interface IDropdownOption {
  name?: string;
  icon: string;
  action: (dispatch: AppDispatch) => void;
}
