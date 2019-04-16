import * as React from 'react';
import { Redirect } from 'react-router';
import { RouteList } from '../../../../config/RouteList';
import PageTemplateContainer from '../../../containers/PageTemplateContainer';
import { ILogoutPageProps } from './ILogoutPageProps';
export class LogoutPage extends React.Component<ILogoutPageProps> {
  constructor(props: ILogoutPageProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { logout, isAuthenticated } = this.props;
    if (!isAuthenticated) {
      return <Redirect to={{ pathname: RouteList.home }} />;
    } else {
      logout();
      return (
        <PageTemplateContainer>
          <div>Logout...</div>
        </PageTemplateContainer>
      );
    }
  }
}
