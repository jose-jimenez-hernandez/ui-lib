import classNames from 'classnames';
import { ButtonProps } from '../ButtonType';

export default ({ color, disabled, size }: Partial<ButtonProps>) => {
  const border = classNames('border border-transparent');

  const text = classNames('font-semibold text-sm', {
    'text-primary-300': disabled,
    [`text-primary-500`]: !color && !disabled,
    [`text-${color}`]: color && !disabled,
  });

  const background = classNames(
    'transition-colors bg-transparent outline outline-offset-2 shadow-none cursor-pointer ',
    {
      [`cursor-default pointer-events-none`]: disabled,
      [`focus:outline-${color}-50`]: !disabled && color,
      [`focus:outline-primary-200`]: !disabled && !color,
    }
  );

  const spinner = classNames('currentColor');

  return {
    background,
    border,
    text,
    spinner,
  };
};
