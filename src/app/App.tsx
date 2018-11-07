import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './components/Hello';
// tslint:disable-next-line:no-any
declare let module: any;

ReactDOM.render(<Hello compiler="Typescript" framework="React" bundler="Webpack" />,
    document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}