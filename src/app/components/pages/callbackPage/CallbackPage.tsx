import * as React from 'react';
import PageTemplateContainer from '../../../containers/PageTemplateContainer';
import { ICallbackPageProps } from './ICallbackPageProps';
export class CallbackPage extends React.Component<ICallbackPageProps> {
  constructor(props: ICallbackPageProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <PageTemplateContainer>
        loading...
      </PageTemplateContainer>
    );
  }

  public componentDidMount() {
    this.props.handleAuthCallback();
  }
}
