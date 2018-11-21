import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';
// tslint:disable-next-line:no-any
declare let module: any;

ReactDOM.render(<App compiler="Typescript" framework="React" bundler="Webpack" />,
    document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}