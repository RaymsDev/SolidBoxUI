import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/App';
// tslint:disable-next-line:no-any
declare let module: any;

const rootElement = document.getElementById('root');

const Root = () => (
    <Router>
        <App compiler="Typescript" framework="React" bundler="Webpack" />
    </Router>
);

ReactDOM.render(<Root />, rootElement);

if (module.hot) {
    module.hot.accept();
}