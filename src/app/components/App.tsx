import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePages';

interface IProps {
  compiler: string;
  framework: string;
  bundler: string;
}

export class App extends React.Component<IProps, {}> {
  public render(): JSX.Element {
    return (
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
      </Switch>
    );
  }
}
