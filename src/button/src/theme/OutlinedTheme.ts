import classNames from 'classnames';
import { ButtonProps } from '../ButtonType';

export default ({ textColor, color = 'gray', disabled }: Partial<ButtonProps>) => {
  color = color === 'white' ? 'black' : color;

  const border = classNames('border', {
    [`border-${color}-200`]: !disabled,
    'border-gray-300': disabled,
  });

  const text = classNames('font-semibold text-sm', {
    [`text-${color}-500`]: !textColor && !disabled,
    'text-gray-300': disabled,
    [`${textColor}`]: textColor && !disabled,
  });

  const background = classNames('transition-colors bg-transparent', {
    [`bg-${color} hover:bg-${color}-400 hover:text-white-100 focus:ring-${color} hover:text-white`]: !disabled,
    'bg-white hover:bg-gray-50': !disabled,
    [`bg-transparent cursor-default pointer-events-none`]: disabled,
  });

  const spinner = classNames('currentColor');

  return {
    background,
    border,
    text,
    spinner,
  };
};
