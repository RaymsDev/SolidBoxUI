import * as React from 'react';
import { Redirect } from 'react-router-dom';
import auth from '../../../services/auth/auth.service';
import { PageTemplate } from '../../templates/pageTemplate/PageTemplate';
import { ICallbackPageProps } from './ICallbackPageProps';
export class CallbackPage extends React.Component<ICallbackPageProps> {
  constructor(props: ICallbackPageProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <PageTemplate>
        loading...
      </PageTemplate>
    );
  }

  public componentDidMount() {
    auth.HandleCallback()
      .then(() => {
        window.location.href = '/';
      });
  }
}
