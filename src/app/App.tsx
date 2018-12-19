import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './components/pages/homePage/HomePage';
import { NotFoundPage } from './components/pages/notFoundPage/NotFoundPage';
import { PlanningPage } from './components/pages/planningPage/PlanningPage';
import { ProjectPage } from './components/pages/projectPage/ProjectPage';
import TodoPageContainer from './containers/TodoPageContainer';
import store from './store/store';
import './styles.scss';

const rootElement = document.getElementById('root');

const Root = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/project" exact={true} component={ProjectPage} />
        <Route path="/planning" exact={true} component={PlanningPage} />
        <Route path="/todo" exact={true} component={TodoPageContainer} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </Provider>

);

ReactDOM.render(<Root />, rootElement);
