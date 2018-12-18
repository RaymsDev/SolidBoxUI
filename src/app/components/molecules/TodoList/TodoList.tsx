import * as React from 'react';
import { Todo } from '../../atoms/todo/Todo';
import { ITodoList } from './ITodoList';
import * as s from './TodoList.scss';

export class TodoList extends React.Component<ITodoList> {
  public render(): JSX.Element {
    const { onTodoClick, todos } = this.props;
    return (
      <ul className={s.container}>
        {todos.map((todo) => (<Todo key={todo.id} todo={todo} onClickHandle={onTodoClick} />))}
      </ul>
    );
  }
}
