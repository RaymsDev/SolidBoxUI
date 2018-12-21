import * as React from 'react';
import { TodoList } from '../../molecules/todoList/TodoList';
import { PageTemplate } from '../../templates/pageTemplate/PageTemplate';
import { ITodoPageProps } from './ITodoPageProps';

export class TodoPage extends React.Component<ITodoPageProps> {

  public render(): JSX.Element {
    return (
      <PageTemplate>
        <TodoList {...this.props} />
      </PageTemplate>
    );
  }
}
