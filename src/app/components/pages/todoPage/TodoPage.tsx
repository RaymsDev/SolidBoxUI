import * as React from 'react';
import PageTemplateContainer from '../../../containers/PageTemplateContainer';
import { TodoList } from '../../molecules/todoList/TodoList';
import { PageTemplate } from '../../templates/pageTemplate/PageTemplate';
import { ITodoPageProps } from './ITodoPageProps';

export class TodoPage extends React.Component<ITodoPageProps> {

  public render(): JSX.Element {
    return (
      <PageTemplateContainer>
        <TodoList {...this.props} />
      </PageTemplateContainer>
    );
  }
}
