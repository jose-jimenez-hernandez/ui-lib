import classNames from 'classnames';
import { ButtonProps } from '../ButtonType';

export default ({ textColor, disabled }: Partial<ButtonProps>) => {
  const border = classNames('border border-transparent');

  const text = classNames('font-semibold text-sm', {
    'text-primary-300': disabled,
    [`text-primary-500`]: !textColor && !disabled,
    [`text-${textColor}`]: textColor && !disabled,
  });

  const background = classNames(
    'transition-colors bg-transparent shadow-none cursor-pointer focus:outline focus:outline-offset-2 ',
    {
      [`cursor-default pointer-events-none`]: disabled,
      [`focus:outline-${textColor}`]: !disabled && textColor,
      [`focus:outline-primary-500`]: !disabled && !textColor,
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
