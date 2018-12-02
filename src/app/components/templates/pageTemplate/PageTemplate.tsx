import * as React from 'react';
import { Navbar } from './../../organisms/navbar/Navbar';
import * as styles from './PageTemplate.scss';

const title = "TeamWork";
export class PageTemplate extends React.Component {
  public render(): JSX.Element {
    const { children } = this.props;
    return (
      <>
        <header className={styles.header}>
          <Navbar title={title} />
        </header>
        <div className={styles.container}>
          {children}
        </div>
      </>
    );
  }
}
