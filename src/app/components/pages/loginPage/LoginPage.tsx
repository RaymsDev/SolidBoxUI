import * as React from 'react';
import { ILoginPageProps } from './ILoginPageProps';
export class LoginPage extends React.Component<ILoginPageProps> {
  constructor(props: ILoginPageProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { login } = this.props;
    login();
    return (
      <div>LoginPage</div>
    );
  }
}
