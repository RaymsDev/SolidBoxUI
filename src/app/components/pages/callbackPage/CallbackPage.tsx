import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { RouteList } from '../../../../config/routes';
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
        loading...
        <Redirect to={RouteList.home} />
      </PageTemplateContainer>
    );
  }
}
