import classNames from 'classnames';
import { ButtonProps } from '../ButtonType';

export default ({ textColor, color, disabled }: Partial<ButtonProps>) => {
  const border = classNames('border border-transparent');

  const text = classNames('text-sm', {
    [`text-${textColor}`]: !disabled && textColor,
    [`text-white`]: !disabled && !textColor,
    'text-gray-200 dark:text-gray-400': disabled,
  }); 

  const background = classNames('transition-colors focus:outline focus:outline-offset-2 ', {
    [`bg-gray-100 dark:bg-gray-700 cursor-default pointer-events-none`]: disabled,
    [`bg-${color}-500 dark:bg-${color}-400 hover:bg-${color}-700`]: !disabled && color,
    [`bg-primary-500 dark:bg-primary-400 hover:bg-primary-700`]: !disabled && !color,
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
