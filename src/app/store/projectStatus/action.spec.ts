import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { IProjectStatussState } from "./type";

const initialState: IProjectStatussState = {
  projectStatuss: [],
  isError: false,
  isFetching: false,
  errorMessage: '',
};

const middlewares = [thunk];
const mockStore = configureMockStore<IProjectStatussState>(middlewares);

