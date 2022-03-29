import { Spinner } from '../Spinner';
import { ButtonProps } from './ButtonType';
import useStyles from './styles';

const Button = ({
  children,
  className = '',
  color,
  disabled = false,
  loading = false,
  name = '',
  shape,
  size,
  textColor,
  ...attrs
}: Partial<ButtonProps>) => {
  const styles = useStyles({
    shape,
    color,
    size,
    textColor,
    disabled,
    className,
  });

  return (
    <button id={name} name={name} {...attrs} className={styles.button} disabled={disabled}>
      {!disabled && loading && <Spinner color={styles.spinner} />}
      {children}
    </button>
  );
};

export default Button;
