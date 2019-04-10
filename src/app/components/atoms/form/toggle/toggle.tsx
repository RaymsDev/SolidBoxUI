import * as React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { IToggleProps } from './IToggleProps';

export class Toggle extends React.Component<IToggleProps> {

  public render(): JSX.Element {
    const { enabled, label, onChange, value } = this.props;
    let text;
    if (value) {
      text = 'enabled';
    } else {
      text = 'disabled';
    }
    const onClick = () => onChange(!value);
    return (
      <Form.Field>
        <label>{label}</label>
        <Button disabled={!enabled} toggle={true} active={value} onClick={onClick}>
          {text}
        </Button>
      </Form.Field>
    );
  }
}
