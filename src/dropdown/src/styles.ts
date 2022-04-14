import classNames from 'classnames';
import { DropdownItemProps, DropdownProps } from './DropdownType';

export const useStyles = ({ className }: Partial<DropdownProps>) => ({
  container: classNames(className, 'relative inline-block text-left'),
  buttonContainer: classNames(
    'inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary-500'
  ),
  items: classNames(
    'origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
  )
});

export const useItemStyles = ({ className, separator, disabled }: Partial<DropdownItemProps>) => ({
  container: classNames(className, 'relative inline-block text-left', {
    true: disabled,
  }),
  item: (active: boolean) =>
    classNames('flex', active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm', {
      'border-b border-b-gray-100': separator,
    }),
});
