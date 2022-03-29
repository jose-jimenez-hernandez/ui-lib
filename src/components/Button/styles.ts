import classNames from 'classnames';
import { ButtonProps } from './ButtonType';
import OutlinedTheme from './theme/OutlinedTheme';
import TextTheme from './theme/TextTheme';
import FlatTheme from './theme/FlatTheme';

const createThemeFactory = ({ shape, ...props }: Partial<ButtonProps>) => {
  switch (shape) {
    case 'outlined':
      return OutlinedTheme(props);
    case 'text':
      return TextTheme(props);
    default:
      return FlatTheme(props);
  }
};

const useStyles = ({ className, ...props }: Partial<ButtonProps>) => {
  const { container, border, text, background, spinner } = createThemeFactory(props);

  return { button: classNames(container, border, text, background, className), spinner };
};

export default useStyles;
