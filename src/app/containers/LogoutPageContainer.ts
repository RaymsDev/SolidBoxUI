import AuthActions from '../store/auth/action';

import store, { IRootState } from '../store/store';

import authService from '../services/auth/auth.service';

import { Dispatch } from 'react';

import { connect } from 'react-redux';
import { ILogoutPageProps } from '../components/pages/logoutPage/ILogoutPageProps';
import { LogoutPage } from '../components/pages/logoutPage/LogoutPage';

const authActions = new AuthActions(store, authService);

const onLogout = (dispatch: Dispatch<any>) => {
  dispatch(authActions.deconnection());
};

const mapStateToProps = (state: IRootState): Partial<ILogoutPageProps> => {
  const { isAuthenticated } = state.authState.authResult;
  return {
    isAuthenticated
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<any>
): Partial<ILogoutPageProps> => {
  return {
    logout: () => onLogout(dispatch)
  };
};

export default connect<Partial<ILogoutPageProps>>(
  mapStateToProps,
  mapDispatchToProps
)(LogoutPage);
