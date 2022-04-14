import { Menu } from '@headlessui/react';
import { DropdownItemProps } from './DropdownType';
import { useItemStyles } from './styles';

const DropdownItem = ({ className, label, href = '#', icon, disabled, separator }: Partial<DropdownItemProps>) => {
  const styles = useItemStyles({
    className,
    disabled,
    separator,
  });

  return (
    <Menu.Item disabled={disabled}>
      {({ active }) => (
        <a href={href} className={styles.item(active)}>
          {icon}
          {label}
        </a>
      )}
    </Menu.Item>
  );
};

export default DropdownItem;
