import * as React from 'react';
import { Form } from 'semantic-ui-react';
import { ISelectProps } from './ISelectProps';

export class Select extends React.Component<ISelectProps> {
  public render(): JSX.Element {
    const { enabled, label, onChange, value, list } = this.props;
    return (
      <Form.Field>
        <Form.Select
          fluid
          disabled={!enabled}
          label={label}
          options={list}
          placeholder={label}
          onChange={onChange}
          value={value}
        />
      </Form.Field>
    );
  }
}
