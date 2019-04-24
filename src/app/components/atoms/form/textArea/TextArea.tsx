import * as React from 'react';
import { Form } from 'semantic-ui-react';
import { ITextAreaProps } from './ITextAreaProps';

export class TextArea extends React.Component<ITextAreaProps> {
  public render(): JSX.Element {
    const { enabled, label, onChange, value, mandatory } = this.props;
    return (
      <Form.Field>
        <Form.TextArea
          required={mandatory}
          label={label}
          disabled={!enabled}
          placeholder={label}
          value={value || ''}
          onChange={onChange}
        />
      </Form.Field>
    );
  }
}
