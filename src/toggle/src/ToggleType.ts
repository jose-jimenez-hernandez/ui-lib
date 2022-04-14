export interface ToggleProps extends HTMLElement {
  disabled: boolean;
  label: string;
  variant: string;
  checked: boolean;
  size: string;
  icon: boolean;
  onChange: (checked: boolean) => void;
}
