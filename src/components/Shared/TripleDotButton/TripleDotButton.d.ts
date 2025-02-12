export interface ITripleDotButtonProps {
  handleDropdownToggle: (index: number) => void;
  index: number;
  dropdownOpen: number | null;
  children: React.ReactNode;
}
