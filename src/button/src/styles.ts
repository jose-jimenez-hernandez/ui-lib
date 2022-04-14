import classNames from 'classnames';
import { ButtonProps, ButtonVariantType } from './ButtonType';
import LinkTheme from './theme/TextTheme';
import PrimaryTheme from './theme/PrimaryTheme';
import SecondaryTheme from './theme/SecondaryTheme';
import TertiaryTheme from './theme/TertiaryTheme';
import { SIZE } from '@settle-ui/utils';

const createThemeFactory = ({ variant, ...props }: Partial<ButtonProps>) => {
  switch (variant) {
    case ButtonVariantType.LINK:
      return LinkTheme(props);
    case ButtonVariantType.TERTIARY:
      return TertiaryTheme(props);
    case ButtonVariantType.SECONDARY:
      return SecondaryTheme(props);
    default:
      return PrimaryTheme(props);
  }
};

const getContainerSize = (size?: SIZE) => {
  return classNames('inline-flex items-center justify-center shadow-sm font-semibold select-none', {
    'rounded-md py-1.5 px-2.5 text-xs': SIZE.XS === size,
    'rounded-lg py-2.5 px-3 text-xs': SIZE.SM === size,
    'rounded-xl py-3 px-4 text-sm': SIZE.BASE === size,
    'rounded-xl py-3.5 px-4 text-base': SIZE.LG === size,
    'rounded-xl py-4 px-6 text-base': SIZE.XL === size,
  });
};

const useStyles = ({ className, ...props }: Partial<ButtonProps>) => {
  const container = getContainerSize(props.size);
  const { border, text, background, spinner } = createThemeFactory(props);

  return { button: classNames(container, border, text, background, className), spinner };
};

export default useStyles;
