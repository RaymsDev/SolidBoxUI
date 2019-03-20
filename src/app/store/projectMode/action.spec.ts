import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { IProjectModesState } from "./type";

const initialState: IProjectModesState = {
  projectModes: [],
  isError: false,
  isFetching: false,
  errorMessage: '',
};

const middlewares = [thunk];
const mockStore = configureMockStore<IProjectModesState>(middlewares);

