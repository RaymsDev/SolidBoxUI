import * as React from 'react';
import { AddTodo } from '../../atoms/addTodo/AddTodo';
import { Todo } from '../../atoms/todo/Todo';
import { ITodoList } from './ITodoList';
import * as s from './TodoList.scss';

export class TodoList extends React.Component<ITodoList> {
  public render(): JSX.Element {
    const { onTodoClick, onTodoCreate, todos } = this.props;
    return (
      <div className={s.container}>
        <AddTodo onSubmitHandler={onTodoCreate} />
        <ul >
          {todos.map((todo) => (<Todo key={todo.id} todo={todo} onClickHandle={onTodoClick} />))}
        </ul>
      </div>
    );
  }
}
