import * as React from 'react';
import { AddTodo } from '../../atoms/addTodo/AddTodo';
import { FilterLink } from '../../atoms/filterLink/FilterLink';
import { Todo } from '../../atoms/todo/Todo';
import { ITodoListProps } from './ITodoListProps';
import * as s from './TodoList.scss';

export class TodoList extends React.Component<ITodoListProps> {
  public render(): JSX.Element {
    const { onTodoClick, onTodoCreate, todos, filters, onFilter } = this.props;
    return (
      <div className={s.container}>
        <AddTodo onSubmitHandler={onTodoCreate} />

        <div>
          Filter: {filters.map((filter, i) => (<span key={i}><FilterLink onClickHandler={onFilter} filter={filter} />{i < filters.length - 1 ? ',' : ''}</span>))}
        </div>

        <ul >
          {todos.map((todo) => (<Todo key={todo.id} todo={todo} onClickHandle={onTodoClick} />))}
        </ul>
      </div>
    );
  }
}
