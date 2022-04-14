import { ChekboxProps } from './ChekboxType';
import useStyles from './styles';

const Chekbox = ({ className, id, disabled, label, description, position, ...attrs }: Partial<ChekboxProps>) => {
  const styles = useStyles({
    className,
    disabled,
    position,
  });

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input id={id} className={styles.input} disabled={disabled} {...attrs} type="checkbox" />
      </div>
      <div className={styles.labelContainer}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Chekbox;
