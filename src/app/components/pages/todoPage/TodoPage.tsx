import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TodoActionTypes } from '../../../store/todo/types';
import { TodoList } from '../../molecules/TodoList/TodoList';
import { PageTemplate } from '../../templates/pageTemplate/PageTemplate';
import store, { IRootState } from './../../../store/store';
import { TodoActions } from './../../../store/todo/action';
import { ITodoPageProps } from './ITodoPageProps';

export class TodoPage extends React.Component<ITodoPageProps> {
  constructor(props: ITodoPageProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { todos, onTodoClick, onTodoCreate } = this.props;
    return (
      <PageTemplate>
        <TodoList todos={todos} onTodoCreate={onTodoCreate} onTodoClick={onTodoClick} />
      </PageTemplate>
    );
  }
}
