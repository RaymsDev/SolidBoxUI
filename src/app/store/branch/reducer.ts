import { normalize, schema } from 'normalizr';
import { IBranch } from '../../models/Branch';
import { IListNormalized } from '../../models/IListNormalized';
import { BranchesActionTypes, BranchTypes } from './action';
import { IBranchesState } from './type';

const initialState: IBranchesState = {
  branches: {
    idList: [],
    entities: {},
  },
  isFetching: false,
  isError: false,
  errorMessage: '',
};

const normalizeBranches = (branches: IBranch[]): IListNormalized<IBranch> => {
  const branch = new schema.Entity('branches');
  const mySchema = { branches: [branch] };
  const normalizedData = normalize(
    {
      branches,
    },
    mySchema,
  );
  return {
    idList: normalizedData.result.branches,
    entities: normalizedData.entities.branches,
  };
};

const receiveBranches = (
  state: IBranchesState = initialState,
  action: BranchesActionTypes,
): IBranchesState => {
  switch (action.type) {
    case BranchTypes.RECEIVE:
      const { entities, idList } = normalizeBranches(action.branches);
      return {
        ...state,
        branches: {
          idList,
          entities,
        },
        isFetching: false,
        isError: false,
        errorMessage: '',
      };
    default:
      return state;
  }
};
export const branchReducer = (
  state: IBranchesState = initialState,
  action: BranchesActionTypes,
): IBranchesState => {
  switch (action.type) {
    case BranchTypes.FETCH_BRANCH:
    case BranchTypes.FETCH_BRANCH_BY_LINK:
      return {
        ...state,
        isFetching: true,
        isError: false,
        errorMessage: '',
      };
    case BranchTypes.RECEIVE:
      return receiveBranches(state, action);
    case BranchTypes.RECEIVE_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
