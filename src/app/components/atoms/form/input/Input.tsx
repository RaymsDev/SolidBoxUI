import * as React from 'react';
import { Form } from 'semantic-ui-react';
import { IInputProps } from './IInputProps';

export class Input extends React.Component<IInputProps> {
  constructor(props: IInputProps) {
    super(props);
  }
  public render(): JSX.Element {
    const { enabled, label, onChange, value, mandatory, error } = this.props;
    return (
      <Form.Input
        required={mandatory}
        disabled={!enabled}
        // tslint:disable-next-line: jsx-boolean-value
        fluid
        label={label}
        placeholder={label}
        value={value || ''}
        onChange={onChange}
        error={error}
      />
    );
  }
}
