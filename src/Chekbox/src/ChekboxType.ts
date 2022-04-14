import { InputHTMLAttributes } from 'react';
import { Position } from '../../utils/types/Position';

export interface ChekboxProps extends InputHTMLAttributes<HTMLElement> {
  className: string;
  label: string;
  description: string;
  position: Position.LEFT | Position.RIGTH;
}
