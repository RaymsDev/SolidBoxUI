import * as React from 'react';
import { Redirect } from 'react-router';
import Loader from 'semantic-ui-react/dist/commonjs/elements/Loader/Loader';
import Dimmer from 'semantic-ui-react/dist/commonjs/modules/Dimmer/Dimmer';
import { RouteList } from '../../../../config/RouteList';
import PageTemplateContainer from '../../../containers/PageTemplateContainer';
import { ILoginPageProps } from './ILoginPageProps';
export class LoginPage extends React.Component<ILoginPageProps> {
  constructor(props: ILoginPageProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { login, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to={{ pathname: RouteList.home }} />;
    } else {
      login();
      return (
        <PageTemplateContainer>
          <Dimmer active={true}>
            <Loader>Login...</Loader>
          </Dimmer>
        </PageTemplateContainer>
      );
    }
  }
}
