import { DropdownItemProps, DropdownProps } from 'semantic-ui-react';

export interface IDatePickerProps {
  error?: boolean;
  errorMessage?: string;
  mandatory?: boolean;
  enabled: boolean;
  label: string;
  dateFormat: string;
  value: Date;
  onChange: (newValue: any) => void;
}
