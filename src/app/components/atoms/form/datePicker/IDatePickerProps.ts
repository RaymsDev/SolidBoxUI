import { DropdownItemProps, DropdownProps } from 'semantic-ui-react';

export interface IDatePickerProps {
  enabled: boolean;
  label: string;
  dateFormat: string;
  value: Date;
  onChange: (newValue: any) => void;
}
