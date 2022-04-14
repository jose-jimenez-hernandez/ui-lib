import { InputHTMLAttributes } from 'react';
import { Position } from '@settle-ui/utils';

export interface ChekboxProps extends InputHTMLAttributes<HTMLElement> {
  className: string;
  label: string;
  description: string;
  position: Position.LEFT | Position.RIGTH;
}
