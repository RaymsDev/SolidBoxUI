import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { clientsReducer } from "./client/reducer";
import { ClientsActionTypes, IClientsState } from "./client/types";
import { todosReducer } from "./todo/reducer";
import { ITodosState, TodoActionTypes } from "./todo/types";

export interface IRootState {
  todosState: ITodosState;
  clientsState: IClientsState;
}

export type IRootAction =
  | ClientsActionTypes
  | TodoActionTypes;

const reducers = combineReducers<IRootState>({
  todosState: todosReducer,
  clientsState: clientsReducer
});

const store = createStore(reducers,
  applyMiddleware(thunk as ThunkMiddleware<IRootState, IRootAction>));
export default store;
