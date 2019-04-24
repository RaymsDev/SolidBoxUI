import * as React from 'react';
import { InputOnChangeData } from 'semantic-ui-react';

export interface IInputProps {
  error?: boolean;
  errorMessage?: string;
  mandatory?: boolean;
  enabled: boolean;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent, { value }: InputOnChangeData) => void;
}
