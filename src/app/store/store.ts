import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import { todosReducer } from "./todo/reducer";
import { ITodosState } from "./todo/types";

export interface IRootState {
  todosState: ITodosState;
}

const reducers = combineReducers<IRootState>({
  todosState: todosReducer
});

const store = createStore(reducers,
  applyMiddleware(thunk));
export default store;
