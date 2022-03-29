import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  children: React.ReactNode;
  color: string;
  disabled: boolean;
  loading: boolean;
  name: string;
  shape: string;
  size: string;
  textColor: string;
}
