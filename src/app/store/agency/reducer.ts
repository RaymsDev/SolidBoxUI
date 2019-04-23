import { normalize, schema } from 'normalizr';
import { IAgency } from '../../models/Agency';
import { IListNormalized } from '../../models/IListNormalized';
import { AgencysActionTypes, AgencyTypes } from './action';
import { IAgencysState } from './type';

const initialState: IAgencysState = {
  agencies: {
    idList: [],
    entities: {},
  },
  isFetching: false,
  isError: false,
  errorMessage: '',
};

const normalizeAgencies = (agencies: IAgency[]): IListNormalized<IAgency> => {
  const agency = new schema.Entity('agencies');
  const mySchema = { agencies: [agency] };
  const normalizedData = normalize(
    {
      agencies,
    },
    mySchema,
  );
  return {
    idList: normalizedData.result.agencies,
    entities: normalizedData.entities.agencies,
  };
};

const receiveAgencies = (
  state: IAgencysState = initialState,
  action: AgencysActionTypes,
): IAgencysState => {
  switch (action.type) {
    case AgencyTypes.RECEIVE:
      const { entities, idList } = normalizeAgencies(action.agencies);
      return {
        ...state,
        agencies: {
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
export const agencyReducer = (
  state: IAgencysState = initialState,
  action: AgencysActionTypes,
): IAgencysState => {
  switch (action.type) {
    case AgencyTypes.FETCH:
      return {
        ...state,
        isFetching: true,
        isError: false,
        errorMessage: '',
      };
    case AgencyTypes.RECEIVE:
      return receiveAgencies(state, action);
    case AgencyTypes.RECEIVE_ERROR:
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
