
import * as React from 'react';
import { Link } from 'react-router-dom';

import { RouteList } from '../../../../config/RouteList';
import { INavbarProps } from './INavbarProps';
import * as s from './Navbar.scss';
export class Navbar extends React.Component<INavbarProps> {

  constructor(props: INavbarProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { title, isAuthenticated } = this.props;
    return (
      <nav className={s.container} >
        <Link className={s.title} to={RouteList.home}><h1>{title}</h1></Link>
        <div className={s.emptyFill} />
        <ul className={s.linkContainer}>
          <li className={s.linkItem}><Link className={s.link} to={RouteList.project}>Projet</Link></li>
          <li className={s.linkItem}><Link className={s.link} to={RouteList.planning}>Planning</Link></li>
        </ul>
        <ul className={s.linkContainer}>
          <li className={s.linkItem}>
            <Link className={s.link} to={RouteList.login}>
              {!isAuthenticated ? "Login" : "Logout"}
            </Link>
          </li>
        </ul>
      </nav >
    );
  }
}
