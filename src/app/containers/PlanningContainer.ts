import { connect } from "react-redux";
import { IPlanningPageProps } from "../components/pages/planningPage/IPlanningPageProps";
import { PlanningPage } from "../components/pages/planningPage/PlanningPage";

const mapStateToProps = (): Partial<IPlanningPageProps> => {
  return {
    clientList: [{
      id: 1,
      links: [],
      name: "Client 1",
      userId: 1
    }, {
      id: 2,
      links: [],
      name: "Client 2",
      userId: 1
    }],
    onClientSelected: (id) => { console.log(id); }
  };
};

export default connect(mapStateToProps)(PlanningPage);
