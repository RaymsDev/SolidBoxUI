import { DropdownItemProps, DropdownProps } from 'semantic-ui-react';

export interface ISelectProps {
  enabled: boolean;
  list: DropdownItemProps[];
  label: string;
  value: number | string;
  onChange: (e: React.SyntheticEvent<HTMLElement>, { value }: DropdownProps) => void;
}
