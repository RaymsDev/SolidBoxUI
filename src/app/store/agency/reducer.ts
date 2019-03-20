import { AgencysActionTypes, AgencyTypes } from "./action";
import { IAgencysState } from "./type";

const initialState: IAgencysState = {
  agencys: [],
  isFetching: false,
  isError: false,
  errorMessage: '',
};

export const agencyReducer = (state: IAgencysState = initialState, action: AgencysActionTypes): IAgencysState => {
  switch (action.type) {
    case AgencyTypes.FETCH:
      return {
        ...state,
        isFetching: true,
        isError: false,
        errorMessage: ''
      };
    case AgencyTypes.RECEIVE:
      return {
        ...state,
        agencys: action.agencys,
        isFetching: false,
        isError: false,
        errorMessage: ''
      };
    case AgencyTypes.RECEIVE_ERROR:
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
