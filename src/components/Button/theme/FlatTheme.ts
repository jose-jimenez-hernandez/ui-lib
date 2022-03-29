import classNames from 'classnames';
import { ButtonProps } from '../ButtonType';

export default ({ textColor = 'white', color = 'white', disabled, size }: Partial<ButtonProps>) => {
  const isWhite = color === 'white';

  const container = classNames(
    `inline-flex items-center justify-center shadow-sm py-2 px-6 font-semibold select-none rounded-md`
  );

  const border = classNames('border', {
    'border-transparent': !isWhite,
    'border-gray-200': isWhite,
  });

  const text = classNames('text-sm', {
    [`text-${textColor}-500`]: !isWhite && !disabled,
    [`text-gray-600`]: isWhite && !disabled,
    'text-gray-300': disabled,
  });

  const background = classNames('transition-colors', {
    [`bg-gray-100 cursor-default pointer-events-none`]: disabled,
    [`bg-${color}-500 hover:bg-${color}-600 focus:ring-${color}`]: !isWhite && !disabled,
    'bg-white hover:bg-gray-50': isWhite && !disabled,
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
