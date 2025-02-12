export interface IInputProps {
  label: string;
  type: string;
  name: string;
  onChange: (e: any) => void;
  onBlur: (e: any) => void;
  value: string;
  errors?: any;
  disabled?: boolean;
}
