import classNames from 'classnames';
import { ButtonProps } from '../ButtonType';

export default ({ textColor, color, disabled, size }: Partial<ButtonProps>) => {
  const border = classNames('border border-transparent');

  const text = classNames('text-sm', {
    [`text-${textColor}`]: !disabled && textColor,
    [`text-white`]: !disabled && !textColor,
    'text-gray-400 dark:text-gray-200': disabled,
  });

  const background = classNames('transition-colors outline outline-offset-2', {
    [`bg-gray-700 dark:bg-gray-100 cursor-default pointer-events-none`]: disabled,
    [`bg-${color}-500 hover:bg-${color}-700`]: !disabled && color,
    [`bg-primary-500 hover:bg-primary-700`]: !disabled && !color,
    [`focus:outline-${color}-500`]: !disabled && color,
    [`focus:outline-primary-500`]: !disabled && !color,
  });

  const spinner = classNames('currentColor');

  return {
    background,
    border,
    text,
    spinner,
  };
};
