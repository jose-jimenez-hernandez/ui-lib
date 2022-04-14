import React from 'react';
import { Status } from '@settle-ui/utils';

export interface StatusMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className: string;
  message: string;
  defaultMessage: string;
  status: Status;
}
