export interface ISubmitButtonProps {
  type: "submit" | "reset" | "button";
  value: string;
  disabled?: boolean;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  onClick?: (e: any) => void;
  icon?: string;
}
