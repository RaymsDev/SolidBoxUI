import { shallow } from 'enzyme';
import * as React from 'react';
import { Navbar } from './Navbar';

test('Display Title in Navbar', () => {
  const fakeLogin = () => {
    console.log("login");
  };
  const fakeLogout = () => {
    console.log("logout");
  };

  const navbar = shallow(<Navbar title="Test" isAuthenticated={false} login={fakeLogin} logout={fakeLogout} />);

  expect(navbar.contains(<h1>Test</h1>)).toBe(true);

});
