export interface ITextAreaProps {
  label: string;
  disabled?: boolean;
  value?: string;
  onChange?: (e: any) => void;
  placeholder?: string;
  name: string;
}
