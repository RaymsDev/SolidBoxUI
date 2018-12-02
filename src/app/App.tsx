import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './components/pages/homePage/HomePage';
import { NotFoundPage } from './components/pages/notFoundPage/NotFoundPage';
import { ProjectPage } from './components/pages/projectPage/ProjectPage';
import './styles.scss';

const rootElement = document.getElementById('root');

const Root = () => (
  <Router>
    <Switch>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/project" exact={true} component={ProjectPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, rootElement);
