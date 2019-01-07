import * as React from 'react';
import { Navbar } from './../../organisms/navbar/Navbar';
import * as styles from './PageTemplate.scss';

const title = "TeamWork";

const login = () => {
  console.log("login");
  throw new Error('not implemented');
};
const logout = () => {
  console.log("logout");
  throw new Error('not implemented');
};

export class PageTemplate extends React.Component {
  public render(): JSX.Element {
    const { children } = this.props;
    return (
      <>
        <header className={styles.header}>
          <Navbar title={title} isAuthenticated={true} login={login} logout={logout} />
        </header>
        <div className={styles.container}>
          {children}
        </div>
      </>
    );
  }
}
