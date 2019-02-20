
import * as React from 'react';
import { Link } from 'react-router-dom';

import { RouteList } from '../../../../config/Routes';
import { INavbarProps } from './INavbarProps';
import * as s from './Navbar.scss';
export class Navbar extends React.Component<INavbarProps> {

  constructor(props: INavbarProps) {
    super(props);

    this.Login = this.Login.bind(this);
    this.Logout = this.Logout.bind(this);
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
            {!isAuthenticated ? (<button className={s.link} onClick={this.Login}>Login</button>) : (<button className={s.link} onClick={this.Logout}>Logout</button>)}
          </li>
        </ul>
      </nav >
    );
  }

  public componentDidMount() {
    /*if (localStorage.getItem('isLoggedIn') !== 'true') {
      auth.Login();
    }*/
  }

  public Login(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    this.props.login();
  }
  public Logout(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    this.props.logout();
  }
}
