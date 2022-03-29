import classNames from 'classnames';
import { ButtonProps } from '../ButtonType';

export default ({ textColor, color, disabled, size }: Partial<ButtonProps>) => {
  const border = classNames('border border-transparent');

  const text = classNames('text-sm', {
    [`text-${textColor}`]: !disabled && textColor,
    [`text-secondary-500`]: !disabled && !textColor,
    'text-gray-400 dark:text-gray-200': disabled,
  });

  const background = classNames('transition-colors outline outline-offset-2', {
    [`bg-gray-700 dark:bg-gray-100 cursor-default pointer-events-none`]: disabled,
    [`bg-${color}-50 hover:bg-${color}-100`]: !disabled && color,
    [`bg-secondary-50 hover:bg-secondary-100`]: !disabled && !color,
    [`focus:outline-${color}-50`]: !disabled && color,
    [`focus:outline-secondary-50`]: !disabled && !color,
  });

  const spinner = classNames('currentColor');

  return {
    background,
    border,
    text,
    spinner,
  };
};
