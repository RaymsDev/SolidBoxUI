import * as React from 'react';
import { Navbar } from './../../organisms/navbar/Navbar';
import { IPageTemplateProps } from './IPageTemplateProps';
import * as styles from './PageTemplate.scss';

const title = "TeamWork";

export class PageTemplate extends React.Component<IPageTemplateProps> {
  public render(): JSX.Element {
    const { children, logout, isAuthenticated } = this.props;
    return (
      <>
        <header className={styles.header}>
          <Navbar title={title} isAuthenticated={isAuthenticated} logout={logout} />
        </header>
        <div className={styles.container}>
          {children}
        </div>
      </>
    );
  }
}
