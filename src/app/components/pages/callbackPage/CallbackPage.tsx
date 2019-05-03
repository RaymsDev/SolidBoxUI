import * as React from 'react';
import { Redirect } from 'react-router-dom';
import Loader from 'semantic-ui-react/dist/commonjs/elements/Loader/Loader';
import Dimmer from 'semantic-ui-react/dist/commonjs/modules/Dimmer/Dimmer';
import { RouteList } from '../../../../config/RouteList';
import PageTemplateContainer from '../../../containers/PageTemplateContainer';
import { ICallbackPageProps } from './ICallbackPageProps';
export class CallbackPage extends React.Component<ICallbackPageProps> {
  constructor(props: ICallbackPageProps) {
    super(props);
  }

  public render(): JSX.Element {
    this.props.handleAuthCallback();
    return (
      <PageTemplateContainer>
        <Dimmer active={true}>
          <Loader>Authentication...</Loader>
        </Dimmer>
        <Redirect to={RouteList.home} />
      </PageTemplateContainer>
    );
  }
}
