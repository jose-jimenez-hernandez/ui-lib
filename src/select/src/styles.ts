import classNames from 'classnames';

export const useStyles = ({ className, error, success, disabled }: any) => ({
  container: classNames(className),
  label: 'block text-sm font-medium text-gray-700',
  labelContainer: 'flex justify-between',
  labelHint: 'block text-right text-xs font-normal text-gray-300 pr-2',
  buttonBox: {
    container: classNames(
      'bg-white relative w-full border rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm',
      {
        'border-gray-300': !error && !success && !disabled,
        'border-error-300': error && !disabled,
        'border-success-300': success && !disabled,
        'bg-gray-100': disabled,
      }
    ),
    label: classNames('block truncate', {
      'text-gray-500': !error && !success && !disabled,
      'text-error-400': error && !disabled,
      'text-success-400': success && !disabled,
      'text-gray-400': disabled,
    }),
    chevron: 'absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none',
    chevronIcon: 'h-5 w-5 text-gray-400',
  },
  options: {
    container:
      'absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm',
  },
  message: classNames('flex mt-2 text-sm', {
    'text-error-400': error,
    'text-success-300': success,
    'text-gray-300': !error && !success,
  }),
});

export const useOptionStyles = ({ className }: any) => ({
  label: (selected: boolean) => classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate'),
  selectedIcon: (active: boolean) =>
    classNames(active ? 'text-white' : 'text-primary-600', 'absolute inset-y-0 right-0 flex items-center pr-4'),
  container: ({ active }: any) =>
    classNames(
      className,
      active ? 'text-white bg-primary-600' : 'text-gray-900',
      'cursor-default select-none relative py-2 pl-3 pr-9'
    ),
});

export default useStyles;
