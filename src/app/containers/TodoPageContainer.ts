import { Dispatch } from "react";
import { connect } from "react-redux";
import { ITodoPageProps } from "../components/pages/todoPage/ITodoPageProps";
import { TodoPage } from "../components/pages/todoPage/TodoPage";
import { IRootState } from "../store/store";
import { TodoActions } from "../store/todo/action";
import { TodoActionTypes } from "../store/todo/types";

const mapStateToProps = (state: IRootState): Partial<ITodoPageProps> => {
  const { todos } = state.todosState;
  return {
    todos
  };
};

const mapDispatchToProps = (dispatch: Dispatch<TodoActionTypes>): Partial<ITodoPageProps> => {
  return {
    onTodoClick: (todoId: number) => dispatch(TodoActions.toggleTodo(todoId))
  };
};

export default connect<Partial<ITodoPageProps>>(mapStateToProps, mapDispatchToProps)(TodoPage);
