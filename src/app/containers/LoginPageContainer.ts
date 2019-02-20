import AuthActions from "../store/auth/action";

import store, { IRootState } from "../store/store";

import authService from "../services/auth/auth.service";

import { Dispatch } from "react";

import { connect } from "react-redux";
import { ILoginPageProps } from "../components/pages/loginPage/ILoginPageProps";
import { LoginPage } from "../components/pages/loginPage/LoginPage";

const authActions = new AuthActions(store, authService);

const onLogin = (dispatch: Dispatch<any>) => {
  dispatch(authActions.authenticate());
};

const mapStateToProps = (state: IRootState): Partial<ILoginPageProps> => {
  return {

  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): Partial<ILoginPageProps> => {
  return {
    login: () => onLogin(dispatch),
  };
};

export default connect<Partial<ILoginPageProps>>(mapStateToProps, mapDispatchToProps)(LoginPage);
