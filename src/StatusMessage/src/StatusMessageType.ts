import React from 'react';
import { Status } from '../../utils/types/StatusType';

export interface StatusMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className: string;
  message: string;
  defaultMessage: string;
  status: Status;
}
