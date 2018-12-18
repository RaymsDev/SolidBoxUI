import { combineReducers, createStore } from "redux";
import { todosReducer } from "./todo/reducer";
import { ITodosState } from "./todo/types";

export interface IRootState {
  todosState: ITodosState;
}

const reducers = combineReducers<IRootState>({
  todosState: todosReducer
});

const store = createStore(reducers);
export default store;
