import { Status } from '../../utils/types/StatusType';

export interface SelectProps {
  disabled: boolean;
  className: string;
  children: SelectOptionProps[];
  selectedItem: any;
  label: string;
  labelHint: string;
  placeholder: string;
  hintMessage: string;
  status: Status;
  statusMessage: string;
  iconChevron: 'selector' | 'default';
}

export interface SelectOptionProps {
  key: string;
  className: string;
  label: string;
  value: any;
}
