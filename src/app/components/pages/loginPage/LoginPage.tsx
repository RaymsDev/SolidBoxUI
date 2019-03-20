import * as React from 'react';
import PageTemplateContainer from '../../../containers/PageTemplateContainer';
import { ILoginPageProps } from './ILoginPageProps';
export class LoginPage extends React.Component<ILoginPageProps> {
  constructor(props: ILoginPageProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { login, isAuthenticated, logout } = this.props;
    if (isAuthenticated) {
      logout();
      return (
        <PageTemplateContainer>
          <div>Logout...</div>
        </PageTemplateContainer>
      );
    } else {
      login();
      return (
        <PageTemplateContainer>
          <div>Login...</div>
        </PageTemplateContainer>
      );
    }
  }
}
