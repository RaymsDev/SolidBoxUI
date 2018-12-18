import * as React from 'react';
import { connect } from 'react-redux';
import { TodoList } from '../../molecules/TodoList/TodoList';
import { PageTemplate } from '../../templates/pageTemplate/PageTemplate';
import store, { IRootState } from './../../../store/store';
import { TodoActions } from './../../../store/todo/action';
import { ITodoPageProps } from './ITodoPageProps';

class TodoPage extends React.Component<ITodoPageProps> {
  constructor(props: ITodoPageProps) {
    super(props);

    this.onTodoClick = this.onTodoClick.bind(this);
  }

  public render(): JSX.Element {
    const { todos } = this.props;
    return (
      <PageTemplate>
        <TodoList todos={todos} onTodoClick={this.onTodoClick} />
      </PageTemplate>
    );
  }

  private onTodoClick(todoId: number): void {
    const action = TodoActions.toggleTodo(todoId);

    store.dispatch(action);

  }
}

const mapStateToProps = (state: IRootState): ITodoPageProps => {
  const { todos } = state.todosState;
  return {
    todos
  };
};

export default connect(mapStateToProps)(TodoPage);
