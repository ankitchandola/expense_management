export interface IOption {
  id: number | null;
  name: string;
}

export interface IComboBoxProps {
  options: IOption[];
  onChange: (dispatch: AppDispatch, value: any) => void;
  placeholder: string;
  label?: string;
  errors?: any;
  name?: string;
  value: string;
}
