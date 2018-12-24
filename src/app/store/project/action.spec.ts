import * as DeepFreeze from 'deep-freeze';
import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";
import projectFakeService, { projectListMock } from '../../services/project/projectFake.service';
import ProjectActions, { ProjectsActionTypes } from './action';
import { IProjectsState } from "./type";

const initialState: IProjectsState = {
  projects: [],
  isError: false,
  isFetching: false,
  errorMessage: ''
};

const middlewares = [thunk];
const mockStore = configureMockStore<IProjectsState>(middlewares);

describe('Project Action', async () => {
  test('Fetch Projects Async', () => {
    const store = mockStore(initialState);
    const projectActions = new ProjectActions(store, projectFakeService);
    const expectedActions: ProjectsActionTypes[] = [
      projectActions.receiveProjects(projectListMock)
    ];

    DeepFreeze(expectedActions);

    const action = projectActions.fetchProjectsAsync();

    DeepFreeze(action);

    return store.dispatch<any>(action)
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  test('Fetch Projects ', () => {
    const store = mockStore(initialState);
    const projectActions = new ProjectActions(store, projectFakeService);

    const expectedActions: any = [
      projectActions.fetchProjects()
    ];
    DeepFreeze(expectedActions);

    const action = projectActions.fetchProjects();
    DeepFreeze(action);

    store.dispatch(action);
    const actualActions = store.getActions();
    expect(actualActions).toEqual(expectedActions);
  });
});
