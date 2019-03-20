import * as React from 'react';
import { IEditTemplateProps, Mode } from './IEditTemplateProps';
import PageTemplateContainer from '../../../containers/PageTemplateContainer';
import { Form, Button, Container } from 'semantic-ui-react'
import * as s from './EditTemplate.scss';

export class EditTemplate extends React.Component<IEditTemplateProps> {

  private getValidButton(mode: Mode, onSave: () => void, onDelete: () => void): JSX.Element {
    if (mode === Mode.View) {
      return (<></>);
    } else if (mode === Mode.Edit) {
      return (
        <Button.Group>
          <Button onClick={onDelete}>Delete</Button>
          <Button.Or />
          <Button positive onClick={onSave}>Save</Button>
        </Button.Group>
      );
    } else if (mode === Mode.Create) {
      return (<Button primary onClick={onSave}>Create</Button>);
    }

  }
  public render(): JSX.Element {
    const { children, mode, onSave, onDelete } = this.props;
    return (
      <PageTemplateContainer>
        <Container>
          <Form>{children}</Form>
          <div className={s.validation}>
            {this.getValidButton(mode, onSave, onDelete)}
          </div>
        </Container>
      </PageTemplateContainer>
    );
  }
}
