import { IProjectStatussState } from './type';

const initialState: IProjectStatussState = {
  projectStatuss: [],
  errorMessage: '',
  isError: false,
  isFetching: false,
};

const errorMessage = 'Error Message';
