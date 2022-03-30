import classNames from 'classnames';
import { ButtonProps } from '../ButtonType';

export default ({ textColor, color, disabled }: Partial<ButtonProps>) => {
  const border = classNames('border border-solid border-tertiary-200');

  const text = classNames('text-sm', {
    [`text-${textColor}`]: !disabled && textColor,
    [`text-tertiary-500`]: !disabled && !textColor, 
    'text-gray-200 dark:text-gray-400': disabled,
  });

  const background = classNames('transition-colors outline outline-offset-2', {
    [`bg-gray-100 dark:bg-gray-700 cursor-default pointer-events-none`]: disabled,
    [`bg-${color}-200 hover:bg-${color}-50`]: !disabled && color,
    [`bg-white hover:bg-tertiary-50`]: !disabled && !color,
    [`focus:outline-${color}-200`]: !disabled && color,
    [`focus:outline-tertiary-200`]: !disabled && !color,
  });

  const spinner = classNames('currentColor');

  return {
    background,
    border,
    text,
    spinner,
  };
};
