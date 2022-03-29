import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  text: string;
  color: string;
  disabled: boolean;
  loading: boolean;
  name: string;
  variant: ButtonVariantType;
  size: string;
  textColor: string;
}


export enum ButtonVariantType {
  PRIMARY="primary",
  SECONDARY="secondary",
  TERTIARY="tertiary",
  LINK="link",
  CUSTOM="custom",
}