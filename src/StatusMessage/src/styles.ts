import classNames from 'classnames';
import { Status } from '../../utils/types/StatusType';
import { StatusMessageProps } from './StatusMessageType';

const useStyles = ({ className, status }: Partial<StatusMessageProps>) => {
  const isError = status === Status.ERROR;
  const isSuccess = status === Status.SUCCESS;
  const isInfo = status === Status.INFO;
  const isNotDefault = status !== Status.DEFAULT;

  return {
    container: classNames(className),
    message: classNames('flex mt-2 text-sm', {
      'text-error-400': isError,
      'text-success-300': isSuccess,
      'text-info-600': isInfo,
      'text-gray-300': !isNotDefault,
    }),
  };
};

export default useStyles;
