import { connect } from "react-redux";
import { Dispatch } from "redux";
import { CallbackPage } from "../components/pages/callbackPage/CallbackPage";
import { ICallbackPageProps } from "../components/pages/callbackPage/ICallbackPageProps";
import authService from "../services/auth/auth.service";
import AuthActions from "../store/auth/action";
import store, { IRootState } from "../store/store";
const authActions = new AuthActions(store, authService);

const onHandleLoginCallback = (dispatch: Dispatch<any>) => {
  dispatch(authActions.handleCallback());
};

const mapSateToProps = (state: IRootState): Partial<ICallbackPageProps> => {
  return {

  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): Partial<ICallbackPageProps> => {
  return {
    handleAuthCallback: () => onHandleLoginCallback(dispatch)
  };
};

export default connect<Partial<ICallbackPageProps>>(mapSateToProps, mapDispatchToProps)(CallbackPage);
