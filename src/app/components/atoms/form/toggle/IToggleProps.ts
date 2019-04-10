import * as React from 'react';
import { InputOnChangeData } from 'semantic-ui-react';

export interface IToggleProps {
  enabled: boolean;
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}
