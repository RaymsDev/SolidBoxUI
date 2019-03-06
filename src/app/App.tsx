
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { RouteList } from '../config/routes';
import { HomePage } from './components/pages/homePage/HomePage';
import { NotFoundPage } from './components/pages/notFoundPage/NotFoundPage';
import { ProjectPage } from './components/pages/projectPage/ProjectPage';
import CallbackPageContainer from './containers/CallbackPageContainer';
import LoginPageContainer from './containers/LoginPageContainer';
import PlanningPageContainer from './containers/PlanningPageContainer';
import PrivateRouteContainer from './containers/PrivateRouteContainer';
import ProjectByClientContainer from './containers/ProjectByClientContainer';
import TodoPageContainer from './containers/TodoPageContainer';
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
    <Router >
      <Switch>
        <Route path={RouteList.home} exact={true} component={HomePage} />
        <Route path={RouteList.authCallback} exact={true} component={CallbackPageContainer} />
        <Route path={RouteList.project} exact={true} component={ProjectByClientContainer} />
        <PrivateRouteContainer isAuthenticated={false} path={RouteList.planning} exact={true} component={PlanningPageContainer} />
        <Route path={RouteList.todo} exact={true} component={TodoPageContainer} />
        <Route path={RouteList.login} exact={true} component={LoginPageContainer} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, rootElement);
