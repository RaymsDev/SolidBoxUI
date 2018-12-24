import * as DeepFreeze from 'deep-freeze';
import { Project } from '../../models/Project';
import { ProjectReducer } from './reducer';
import { IFetchProjectsAction, IProjectsState, IReceiveErrorAction, IReceiveProjectsAction, ProjectTypes } from "./type";

const initialState: IProjectsState = {
  projects: [],
  errorMessage: '',
  isError: false,
  isFetching: false
};

const projectList: Project[] = [
  {
    id: 1,
    name: "Solid Box API",
    startDate: null,
    endDate: null,
    projectStatutId: 1,
    projectModeId: 1,
    clientId: null,
    parentProjectId: null,
    sortOrder: null,
    comment: null,
    enableOverRun: null,
    updateDate: null,
    amount: null,
    teamId: 1,
    branchId: 1,
    agencyId: 1,
    ownerUserId: 2,
    consumedLoad: 0,
    plannedLoad: 0,
    totalLoad: 0,
    links: [
      {
        rel: "ProjectChildren",
        url: "/API/Projects?$filter=ParentProjectId eq 1",
        method: "GET"
      },
      {
        rel: "ProjectChildren",
        url: "/API/Projects?$filter=ParentProjectId eq 1",
        method: "GET"
      }
    ]
  },
  {
    id: 6,
    name: "Solid Box Front React",
    startDate: null,
    endDate: null,
    projectStatutId: 1,
    projectModeId: 1,
    clientId: null,
    parentProjectId: null,
    sortOrder: null,
    comment: null,
    enableOverRun: null,
    updateDate: null,
    amount: null,
    teamId: 1,
    branchId: 1,
    agencyId: 1,
    ownerUserId: 3,
    consumedLoad: 0,
    plannedLoad: 0,
    totalLoad: 0,
    links: []
  },];

const errorMessage = 'Error Message';

describe('Project Reducer', () => {
  test('Fetch Projects', () => {
    const stateBefore = initialState;
    DeepFreeze(stateBefore);
    const action: IFetchProjectsAction = {
      type: ProjectTypes.FETCH_PROJECTS
    };
    DeepFreeze(action);
    const stateAfter: IProjectsState = {
      ...initialState,
      isFetching: true
    };
    DeepFreeze(stateAfter);

    expect(stateAfter).toEqual(ProjectReducer(stateBefore, action));
  });
  test('Receive Projects', () => {
    const stateBefore = initialState;
    DeepFreeze(stateBefore);
    const action: IReceiveProjectsAction = {
      type: ProjectTypes.RECEIVE_PROJECTS,
      projects: projectList
    };
    DeepFreeze(action);
    const stateAfter: IProjectsState = {
      ...initialState,
      projects: projectList
    };
    DeepFreeze(stateAfter);

    expect(stateAfter).toEqual(ProjectReducer(stateBefore, action));
  });
  test('Receive Error', () => {
    const stateBefore = initialState;
    DeepFreeze(stateBefore);
    const action: IReceiveErrorAction = {
      type: ProjectTypes.RECEIVE_ERROR,
      errorMessage
    };
    DeepFreeze(action);
    const stateAfter: IProjectsState = {
      ...initialState,
      isError: true,
      errorMessage
    };
    DeepFreeze(stateAfter);

    expect(stateAfter).toEqual(ProjectReducer(stateBefore, action));
  });
});
