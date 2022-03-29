import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  text: string;
  color: string;
  disabled: boolean;
  loading: boolean;
  name: string;
  shape: string;
  size: string;
  textColor: string;
}
