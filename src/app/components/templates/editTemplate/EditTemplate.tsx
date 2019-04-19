import * as React from 'react';
import { Button, Container, Form } from 'semantic-ui-react';
import PageTemplateContainer from '../../../containers/PageTemplateContainer';
import * as s from './EditTemplate.scss';
import { IEditTemplateProps, Mode } from './IEditTemplateProps';

export class EditTemplate extends React.Component<IEditTemplateProps> {
  public render(): JSX.Element {
    const { children, mode, onSave, onDelete, onCreate } = this.props;
    return (
      <PageTemplateContainer>
        <Container className={s.container}>
          <Form>{children}</Form>
          <div className={s.validation}>
            {this.getValidButton(mode, onSave, onDelete, onCreate)}
          </div>
        </Container>
      </PageTemplateContainer>
    );
  }

  private getValidButton(mode: Mode, onSave: () => void, onDelete: () => void, onCreate: () => void): JSX.Element {
    if (mode === Mode.View) {
      return (<></>);
    } else if (mode === Mode.Edit) {
      return (
        <Button.Group>
          <Button onClick={onDelete}>Delete</Button>
          <Button.Or />
          <Button positive={true} onClick={onSave}>Save</Button>
        </Button.Group>
      );
    } else if (mode === Mode.Create) {
      return (<Button primary={true} onClick={onCreate}>Create</Button>);
    }

  }
}
