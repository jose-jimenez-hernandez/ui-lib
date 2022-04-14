import { Status } from '../../utils/types/StatusType';
import { StatusMessageProps } from './StatusMessageType';
import useStyles from './styles';

const getAccessibilitiesAttr = (status: Status | undefined) => {
  switch (status) {
    case Status.SUCCESS:
      return 'polite';
    case Status.ERROR:
      return 'assertive';
    default:
      return 'off';
  }
};

const StatusMessage = ({ className, status, defaultMessage, message, ...attributes }: Partial<StatusMessageProps>) => {
  const styles = useStyles({
    className,
    status,
  });

  const hasMessage = defaultMessage || message;
  const accessibility = getAccessibilitiesAttr(status);

  if (!hasMessage) {
    return null;
  }

  return (
    <p {...attributes} className={styles.message} aria-live={accessibility}>
      {message || defaultMessage}
    </p>
  );
};

export default StatusMessage;
