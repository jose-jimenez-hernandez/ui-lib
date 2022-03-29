import classNames from 'classnames';
import { ButtonProps } from '../ButtonType';

export default ({ textColor, color = 'gray', disabled, size }: Partial<ButtonProps>) => {
  color = color === 'white' ? 'black' : color;
  // const container = classNames(`inline-flex items-center justify-center select-none py-2 px-6`);
  const container = classNames(`inline-flex items-center justify-center py-2 px-2 select-none rounded-md`);

  const border = classNames('border border-transparent');

  const text = classNames('font-semibold text-sm', {
    [`text-${color}-500`]: !textColor && !disabled,
    'text-gray-300': disabled,
    [`${textColor}`]: textColor && !disabled,
  });

  const background = classNames('transition-colors bg-transparent', {
    [`hover:bg-${color}-400 hover:text-white-100  focus:ring-${color}`]: !disabled,
    [`cursor-default pointer-events-none`]: disabled,
  });

  const spinner = classNames('currentColor');

  return {
    background,
    border,
    container,
    text,
    spinner,
  };
};
