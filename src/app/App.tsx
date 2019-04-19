import * as React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { RouteList } from '../config/RouteList';
import { HomePage } from './components/pages/homePage/HomePage';
import { LogoutPage } from './components/pages/logoutPage/LogoutPage';
import { NotFoundPage } from './components/pages/notFoundPage/NotFoundPage';
import { ProjectPage } from './components/pages/projectPage/ProjectPage';
import CallbackPageContainer from './containers/CallbackPageContainer';
import EditProjectPageContainer from './containers/EditProjectPageContainer';
import LoginPageContainer from './containers/LoginPageContainer';
import PlanningPageContainer from './containers/PlanningPageContainer';
import PrivateRouteContainer from './containers/PrivateRouteContainer';
import authService from './services/auth/auth.service';
import AuthActions from './store/auth/action';
import store from './store/store';
import './styles.scss';

const authAction = new AuthActions(store, authService);
const rootElement = document.getElementById('root');

store.dispatch(authAction.checkAuthentication());
const { isAuthenticated } = store.getState().authState.authResult;
const Root = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path={RouteList.home} exact={true} component={HomePage} />
        <Route
          path={RouteList.authCallback}
          exact={true}
          component={CallbackPageContainer}
        />
        <Route path={RouteList.project} exact={true} component={ProjectPage} />
        <PrivateRouteContainer
          isAuthenticated={isAuthenticated}
          path={RouteList.planning}
          exact={true}
          component={PlanningPageContainer}
        />
        <Route
          path={RouteList.login}
          exact={true}
          component={LoginPageContainer}
        />
        <Route path={RouteList.logout} exact={true} component={LogoutPage} />
        <Route
          path={RouteList.edit}
          exact={true}
          component={EditProjectPageContainer}
        />
        <Route component={NotFoundPage} />
        <Route
          path={RouteList.create}
          exact={true}
          component={EditProjectPageContainer}
        />
        <Route
          path={RouteList.edit}
          exact={true}
          component={EditProjectPageContainer}
        />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, rootElement);
