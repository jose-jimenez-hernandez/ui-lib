import { CheckIcon } from '@heroicons/react/solid';
import { SelectOptionProps } from './SelectType';
import { useOptionStyles } from './styles';
import { Listbox } from '@headlessui/react';

const SelectOption = ({ className, value, label }: Partial<SelectOptionProps>) => {
  const styles = useOptionStyles({
    className,
  });

  return (
    <Listbox.Option className={styles.container} value={value}>
      {({ selected, active }) => (
        <>
          <span className={styles.label(selected)}>{label}</span>

          {selected ? (
            <span className={styles.selectedIcon(active)}>
              <CheckIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          ) : null}
        </>
      )}
    </Listbox.Option>
  );
};

export default SelectOption;
