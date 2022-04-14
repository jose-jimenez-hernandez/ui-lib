import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, DotsVerticalIcon } from '@heroicons/react/solid';
import { DropdownProps } from './DropdownType';
import { useStyles } from './styles';

const Dropdown = ({ className, label, disabled, children }: Partial<DropdownProps>) => {
  const styles = useStyles({
    className,
    disabled,
  });

  return (
    <Menu as="div" className={styles.container}>
      <div>
        <Menu.Button className={styles.buttonContainer} disabled={disabled}>
          <span className={label ? '' : 'sr-only'}>{label || 'Options'}</span>
          {label && <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />}
          {!label && <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={styles.items}>{children}</Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
