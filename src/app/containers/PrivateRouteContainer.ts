
import { Dispatch } from "react";
import { connect } from "react-redux";
import { IPrivateRouteProps } from "../components/atoms/privateRoute/IPrivateRouteProps";
import { PrivateRoute } from "../components/atoms/privateRoute/PrivateRoute";
import { IRootState } from "../store/store";

const mapStateToProps = (state: IRootState): Partial<IPrivateRouteProps> => {
  const { isAuthenticated } = state.authState.authResult;
  return {
    isAuthenticated
  };
};

export default connect<Partial<any>>(mapStateToProps)(PrivateRoute);
