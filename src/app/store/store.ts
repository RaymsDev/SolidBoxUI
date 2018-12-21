import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { clientsReducer } from "./client/reducer";
import { IClientsState } from "./client/types";
import { todosReducer } from "./todo/reducer";
import { ITodosState } from "./todo/types";

export interface IRootState {
  todosState: ITodosState;
  clientsState: IClientsState;
}

const reducers = combineReducers<IRootState>({
  todosState: todosReducer,
  clientsState: clientsReducer
});

const store = createStore(reducers,
  applyMiddleware(thunk as ThunkMiddleware<IRootState>));
export default store;
