import React from 'react';

export interface DropdownProps {
  className: string;
  label: string;
  disabled: boolean;
  children: DropdownItemProps[];
}

export interface DropdownItemProps {
  className: string;
  label: string;
  disabled: boolean;
  href: string;
  icon: React.ReactNode;
  value: any;
  separator: boolean;
}
