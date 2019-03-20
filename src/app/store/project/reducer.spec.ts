import * as DeepFreeze from 'deep-freeze';
import { projectListMock } from './../../services/project/projectFake.service';
import { IFetchClientProjectsAction, IFetchProjectsAction, IReceiveErrorAction, IReceiveProjectsAction, ProjectTypes } from './action';
import { projectReducer } from './reducer';
import { IProjectsState } from './type';
import { Project } from '../../models/Project';

const initialState: IProjectsState = {
  projects: [],
  errorMessage: '',
  isError: false,
  isFetching: false,
  edited: new Project(),
};

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

    expect(stateAfter).toEqual(projectReducer(stateBefore, action));
  });
  test('Fetch Client Projects', () => {
    const stateBefore = initialState;
    DeepFreeze(stateBefore);
    const action: IFetchClientProjectsAction = {
      type: ProjectTypes.FETCH_CLIENT_PROJECTS
    };
    DeepFreeze(action);
    const stateAfter: IProjectsState = {
      ...initialState,
      isFetching: true
    };
    DeepFreeze(stateAfter);

    expect(stateAfter).toEqual(projectReducer(stateBefore, action));
  });
  test('Receive Projects', () => {
    const stateBefore = initialState;
    DeepFreeze(stateBefore);
    const action: IReceiveProjectsAction = {
      type: ProjectTypes.RECEIVE_PROJECTS,
      projects: projectListMock
    };
    DeepFreeze(action);
    const stateAfter: IProjectsState = {
      ...initialState,
      projects: projectListMock
    };
    DeepFreeze(stateAfter);

    expect(stateAfter).toEqual(projectReducer(stateBefore, action));
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

    expect(stateAfter).toEqual(projectReducer(stateBefore, action));
  });
});
