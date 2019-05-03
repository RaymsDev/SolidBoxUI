import * as React from 'react';
import { Redirect, Route } from 'react-router';
import { RouteList } from '../../../../config/RouteList';
import { IPrivateRouteProps } from './IPrivateRouteProps';
export class PrivateRoute extends React.Component<IPrivateRouteProps> {
  constructor(props: IPrivateRouteProps) {
    super(props);

    this.renderRoute = this.renderRoute.bind(this);
  }

  public render(): JSX.Element {
    const { component: Component, isAuthenticated: isSignedIn, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={this.renderRoute}
      />
    );
  }

  public renderRoute(routeProps: any) {
    const { component: Component, isAuthenticated: isSignedIn, ...rest } = this.props;
    if (isSignedIn) {
      return (
        <Component {...routeProps} />
      );
    }
    return (
      <Redirect to={{ pathname: RouteList.login, state: { from: routeProps.location } }} />
    );
  }
}
