import { useEffect, useState } from 'react';
import { Switch } from '@headlessui/react';
import { ToggleProps } from './ToggleType';
import useStyles from './styles';

const Toggle = ({ className, disabled, label, variant, size, checked, icon, onChange }: Partial<ToggleProps>) => {
  const [enabled, setEnabled] = useState(checked);
  const styles = useStyles({
    disabled,
    label,
    variant,
    className,
    size,
  });

  useEffect(() => {
    setEnabled(Boolean(enabled));
  }, [checked]);

  const onChangeHandle = (checked: boolean) => {
    onChange?.(!checked);
    setEnabled(Boolean(!enabled));
  };

  return (
    <Switch.Group as="div" className={styles.container}>
      <Switch
        checked={Boolean(enabled)}
        disabled={disabled}
        onChange={onChangeHandle}
        className={styles.switch(Boolean(enabled))}
      >
        <span className="sr-only">Use setting</span>
        <span aria-hidden="true" className={styles.switchAnimation} />
        <span aria-hidden="true" className={styles.tracker(enabled)} />
        <span aria-hidden="true" className={styles.dragger(enabled)}>
          {icon && (
            <>
              <span className={styles.iconOff(enabled)} aria-hidden="true">
                <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                  <path
                    d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className={styles.iconOn(enabled)} aria-hidden="true">
                <svg className="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
                  <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                </svg>
              </span>
            </>
          )}
        </span>
      </Switch>
      <Switch.Label as="span" className={styles.switchLabel}>
        {label}
      </Switch.Label>
    </Switch.Group>
  );
};

export default Toggle;
