import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IPlanningPageProps } from "../components/pages/planningPage/IPlanningPageProps";
import { PlanningPage } from "../components/pages/planningPage/PlanningPage";
import clientService from "../services/client/client.service";
import { ClientActions } from "../store/client/action";
import store, { IRootState } from "../store/store";
const actions = new ClientActions(store, clientService);

const mapStateToProps = (state: IRootState): Partial<IPlanningPageProps> => {
  const { clients } = state.clientsState;
  return {
    clientList: clients,
  };
};

// init
store.dispatch(actions.fetchClientsAsync());

const mapDispatchToProps = (dispatch: Dispatch<any>): Partial<IPlanningPageProps> => {
  return {
    onClientSelected: (id: number) => { console.log(id); }
  };
};

export default connect<Partial<IPlanningPageProps>>(mapStateToProps, mapDispatchToProps)(PlanningPage);
