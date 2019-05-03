import * as React from 'react';
import { Form } from 'semantic-ui-react';
import { IInputProps } from './IInputProps';

export class Input extends React.Component<IInputProps> {
  public render(): JSX.Element {
    const { enabled, label, onChange, value } = this.props;
    return (
      <Form.Input
        disabled={!enabled}
        fluid
        label={label}
        placeholder={label}
        value={value}
        onChange={onChange}
      />
    );
  }
}
