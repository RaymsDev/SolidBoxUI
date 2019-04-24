import * as React from 'react';
import { Dropdown, Form } from 'semantic-ui-react';
import { ISelectProps } from './ISelectProps';

export class Select extends React.Component<ISelectProps> {
  public render(): JSX.Element {
    const { enabled, label, onChange, value, list, mandatory, error } = this.props;
    return (
      <Form.Field>
        <div className={(enabled ? "" : "disabled ") + (mandatory ? "required " : "") + "field"}>
          <label>{label}</label>
          <Dropdown
            // tslint:disable-next-line: jsx-boolean-value
            clearable
            options={list}
            // tslint:disable-next-line: jsx-boolean-value
            selection
            // tslint:disable-next-line: jsx-boolean-value
            fluid
            onChange={onChange}
            disabled={!enabled}
            placeholder={label}
            value={value}
            error={error}
            required={mandatory}
          />
        </div>
      </Form.Field >
    );
  }
}
