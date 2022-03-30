import { Spinner } from '../Spinner';
import { SIZE } from '../../core/enums/SizeEnum';
import { ButtonProps, ButtonVariantType } from './ButtonType';
import useStyles from './styles';

const Button = ({
  text,
  className = '',
  color,
  disabled = false,
  loading = false,
  name = '',
  size = SIZE.BASE,
  variant = ButtonVariantType.TERTIARY,
  textColor,
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
    <button id={name} name={name} {...attrs} className={styles.button} disabled={disabled}>
      {!disabled && loading && <Spinner color={styles.spinner} />}
      {text}
    </button>
  );
};

export default Button;
