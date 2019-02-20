import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IPageTemplateProps } from "../components/templates/pageTemplate/IPageTemplateProps";
import { PageTemplate } from "../components/templates/pageTemplate/PageTemplate";
import authService from "../services/auth/auth.service";
import AuthActions from "../store/auth/action";
import store, { IRootState } from "../store/store";

const authActions = new AuthActions(store, authService);

const onLogout = (dispatch: Dispatch<any>) => {
  dispatch(authActions.deconnection());
};

const mapStateToProps = (state: IRootState): Partial<IPageTemplateProps> => {
  const { isAuthenticated } = state.authState.authResult;
  return {
    isAuthenticated
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): Partial<IPageTemplateProps> => {
  return {
    logout: () => onLogout(dispatch)
  };
};

export default connect<Partial<IPageTemplateProps>>(mapStateToProps, mapDispatchToProps)(PageTemplate);
