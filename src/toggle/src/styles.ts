import classNames from 'classnames';
import { SIZE } from '@settle-ui/utils';
import { ToggleProps } from './ToggleType';

const useStyles = ({ className, size }: Partial<ToggleProps>) => ({
  container: classNames(className, 'flex items-center'),
  switch: (enabled: boolean) =>
    classNames(
      enabled ? 'bg-primary-600' : 'bg-gray-200',
      'flex-shrink-0 group relative rounded-full inline-flex items-center justify-center cursor-pointer  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
      {
        'h-6 w-11': size !== SIZE.SM,
        'h-5 w-10': size === SIZE.SM,
      }
    ),
  switchAnimation: classNames('pointer-events-none absolute bg-white w-full h-full rounded-md'),
  tracker: (enabled = false) =>
    classNames(
      enabled ? 'bg-primary-600' : 'bg-gray-200',
      'pointer-events-none absolute  mx-auto rounded-full transition-colors ease-in-out duration-200',
      {
        'h-6 w-11': size !== SIZE.SM,
        'h-4 w-9': size === SIZE.SM,
      }
    ),
  dragger: (enabled = false) =>
    classNames(
      enabled ? 'translate-x-5' : 'translate-x-0',
      'pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200'
    ),
  switchLabel: 'text-sm font-medium text-gray-900 ml-3',
  iconOn: (enabled = false) =>
    classNames(
      enabled ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
      'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
    ),
  iconOff: (enabled = false) =>
    classNames(
      enabled ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
      'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
    ),
});

export default useStyles;
