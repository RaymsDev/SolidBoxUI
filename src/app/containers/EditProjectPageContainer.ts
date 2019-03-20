import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Project } from "../models/Project";
import projectService from "../services/project/project.service";
import projectModeService from "../services/projectMode/projectMode.service";
import projectStatusService from "../services/projectStatus/projectStatus.service";
import ProjectActions from "../store/project/action";
import ProjectModeActions from "../store/projectMode/action";
import ProjectStatusActions from "../store/projectStatus/action";
import store, { IRootState } from "../store/store";
import { EditProjectPage } from "../components/pages/editProjectPage/EditProjectPage";
import { IEditProjectPageProps } from "../components/pages/editProjectPage/IEditProjectPageProps";
const projectActions = new ProjectActions(store, projectService);
const projectModeActions = new ProjectModeActions(store, projectModeService);
const projectStatusActions = new ProjectStatusActions(store, projectStatusService);

const mapStateToProps = (state: IRootState): Partial<IEditProjectPageProps> => {
  const { projectModes } = state.projectModesState;
  const { projectStatuss } = state.projectStatussState;
  const { edited } = state.projectsState;
  return {
    newProject: edited,
    listProjectMode: projectModes,
    listProjectStatus: projectStatuss,
  };
};

// init
store.dispatch(projectActions.newEdited());
store.dispatch(projectModeActions.fetch());
store.dispatch(projectStatusActions.fetch());

const mapDispatchToProps = (dispatch: Dispatch<any>): Partial<IEditProjectPageProps> => {
  return {
    onChangeProperty: (property: keyof Project): (newValue: any) => void => {
      return (newValue: any): void => {
        dispatch(projectActions.updateEdited(property, newValue));
      }
    },
  };
};

export default connect<Partial<IEditProjectPageProps>>(mapStateToProps, mapDispatchToProps)(EditProjectPage);
