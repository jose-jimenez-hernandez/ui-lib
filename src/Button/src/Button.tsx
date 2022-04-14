import { Spinner } from '@settle-ui/Spinner';
import { SIZE } from '@settle-ui/utils/types/SizeType';
import { ButtonProps, ButtonVariantType } from './ButtonType';
import useStyles from './styles';

const Button = ({
  children,
  className = '',
  color,
  disabled = false,
  loading = false,
  id = '',
  name = '',
  size = SIZE.BASE,
  text,
  textColor,
  variant = ButtonVariantType.TERTIARY,
  ...attrs
}: Partial<ButtonProps>) => {
  const styles = useStyles({
    color,
    size,
    textColor,
    disabled,
    className,
    variant,
  });

  return (
    <button id={id || name} name={name} {...attrs} className={styles.button} disabled={disabled}>
      {!disabled && loading && <Spinner color={styles.spinner} />}
      {children || text}
    </button>
  );
};

export default Button;
