import { BranchsActionTypes, BranchTypes } from "./action";
import { IBranchsState } from "./type";

const initialState: IBranchsState = {
  branchs: [],
  isFetching: false,
  isError: false,
  errorMessage: '',
};

export const branchReducer = (state: IBranchsState = initialState, action: BranchsActionTypes): IBranchsState => {
  switch (action.type) {
    case BranchTypes.FETCH:
      return {
        ...state,
        isFetching: true,
        isError: false,
        errorMessage: ''
      };
    case BranchTypes.RECEIVE:
      return {
        ...state,
        branchs: action.branchs,
        isFetching: false,
        isError: false,
        errorMessage: ''
      };
    case BranchTypes.RECEIVE_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true,
        errorMessage: action.errorMessage
      };
    default:
      return state;
  }
};
