import { Dispatch } from "react";
import { connect } from "react-redux";
import { ITodoPageProps } from "../components/pages/todoPage/ITodoPageProps";
import { TodoPage } from "../components/pages/todoPage/TodoPage";
import { IRootState } from "../store/store";
import { TodoActions, TodoActionTypes, VisibilityFilter } from "../store/todo/action";

const mapStateToProps = (state: IRootState): Partial<ITodoPageProps> => {
  const { visibleTodos } = state.todosState;
  return {
    todos: visibleTodos,
    filters: [{
      label: 'All',
      value: VisibilityFilter.SHOW_ALL
    }, {
      label: 'Active',
      value: VisibilityFilter.SHOW_ACTIVE
    }, {
      label: 'Complete',
      value: VisibilityFilter.SHOW_COMPLETE
    },]
  };
};

const mapDispatchToProps = (dispatch: Dispatch<TodoActionTypes>): Partial<ITodoPageProps> => {
  return {
    onTodoClick: (todoId: number) => dispatch(TodoActions.toggleTodo(todoId)),
    onTodoCreate: (todoText: string) => dispatch(TodoActions.addTodo(todoText)),
    onFilter: (filter: string) => dispatch(TodoActions.setVisibility(filter))
  };
};

export default connect<Partial<ITodoPageProps>>(mapStateToProps, mapDispatchToProps)(TodoPage);
