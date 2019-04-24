import { DropdownItemProps, DropdownProps } from 'semantic-ui-react';

export interface ISelectProps {
  error?: boolean;
  errorMessage?: string;
  mandatory?: boolean;
  enabled: boolean;
  list: DropdownItemProps[];
  label: string;
  value: number | string;
  onChange: (e: React.SyntheticEvent<HTMLElement>, { value }: DropdownProps) => void;
}
