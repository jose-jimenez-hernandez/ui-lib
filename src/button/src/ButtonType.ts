import React, { ButtonHTMLAttributes } from 'react';
import { SIZE } from '@settle-ui/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  children: React.ReactNode;
  color: string;
  disabled: boolean;
  loading: boolean;
  name: string;
  size: SIZE;
  text: string;
  textColor: string;
  variant: ButtonVariantType;
}

export enum ButtonVariantType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  LINK = 'link',
  CUSTOM = 'custom',
}
