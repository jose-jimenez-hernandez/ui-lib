import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon, CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { SelectProps } from './SelectType';
import useStyles from './styles';
import { Status } from '../../utils/types/StatusType';
import { StatusMessage } from '../StatusMessage';
import SelectOption from './SelectOption';

const Select = ({
  label,
  labelHint,
  status,
  statusMessage,
  hintMessage,
  disabled,
  placeholder,
  className,
  children,
  iconChevron,
  selectedItem,
}: Partial<SelectProps>) => {
  const [selected, setSelected] = useState(selectedItem);
  const hasError = status === Status.ERROR;
  const hasSuccess = status === Status.SUCCESS;
  const isChevronType = iconChevron !== 'selector';

  const styles = useStyles({
    className,
    disabled,
    error: hasError,
    success: hasSuccess,
  });

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className={styles.labelContainer}>
            {label && <Listbox.Label className={styles.label}>{label}</Listbox.Label>}
            {labelHint && <Listbox.Label className={styles.labelHint}>{labelHint}</Listbox.Label>}
          </div>
          <div className="mt-1 relative">
            <Listbox.Button className={styles.buttonBox.container}>
              <span className={styles.buttonBox.label}>{selected?.name || placeholder}</span>
              <span className={styles.buttonBox.chevron}>
                {isChevronType ? (
                  <ChevronDownIcon className={styles.buttonBox.chevronIcon} aria-hidden="true" />
                ) : (
                  <SelectorIcon className={styles.buttonBox.chevronIcon} aria-hidden="true" />
                )}
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className={styles.options.container}>{children}</Listbox.Options>
            </Transition>
          </div>
          <StatusMessage status={status} defaultMessage={hintMessage} message={statusMessage} />
        </>
      )}
    </Listbox>
  );
};

export default Select;
