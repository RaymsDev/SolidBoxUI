
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CallbackPage } from './components/pages/callbackPage/CallbackPage';
import { HomePage } from './components/pages/homePage/HomePage';
import { NotFoundPage } from './components/pages/notFoundPage/NotFoundPage';
import { ProjectPage } from './components/pages/projectPage/ProjectPage';
import PlanningContainer from './containers/PlanningContainer';
import TodoPageContainer from './containers/TodoPageContainer';
import store from './store/store';
import './styles.scss';

const rootElement = document.getElementById('root');
const Root = () => (
  <Provider store={store}>
    <Router >
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/callback" exact={true} component={CallbackPage} />
        <Route path="/project" exact={true} component={ProjectPage} />
        <Route path="/planning" exact={true} component={PlanningContainer} />
        <Route path="/todo" exact={true} component={TodoPageContainer} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, rootElement);
