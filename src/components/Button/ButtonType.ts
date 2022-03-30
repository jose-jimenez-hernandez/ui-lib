import { ButtonHTMLAttributes } from 'react';
import { SIZE } from '../../core/enums/SizeEnum';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  text: string;
  color: string;
  disabled: boolean;
  loading: boolean;
  name: string;
  variant: ButtonVariantType;
  size: SIZE;
  textColor: string;
}


export enum ButtonVariantType {
  PRIMARY="primary",
  SECONDARY="secondary",
  TERTIARY="tertiary",
  LINK="link",
  CUSTOM="custom",
}