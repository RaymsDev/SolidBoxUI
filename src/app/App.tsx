
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { HomePage } from './components/pages/homePage/HomePage';
import { NotFoundPage } from './components/pages/notFoundPage/NotFoundPage';
import { ProjectPage } from './components/pages/projectPage/ProjectPage';
import CallbackPageContainer from './containers/CallbackPageContainer';
import PlanningPageContainer from './containers/PlanningPageContainer';
import TodoPageContainer from './containers/TodoPageContainer';
import authService from './services/auth/auth.service';
import AuthActions from './store/auth/action';
import store from './store/store';
import './styles.scss';

const authAction = new AuthActions(store, authService);
const rootElement = document.getElementById('root');

store.dispatch(authAction.checkAuthentication());

const Root = () => (
  <Provider store={store}>
    <Router >
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/callback" exact={true} component={CallbackPageContainer} />
        <Route path="/project" exact={true} component={ProjectPage} />
        <Route path="/planning" exact={true} component={PlanningPageContainer} />
        <Route path="/todo" exact={true} component={TodoPageContainer} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, rootElement);
