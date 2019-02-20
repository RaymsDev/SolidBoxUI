import { shallow } from 'enzyme';
import * as React from 'react';
import { Navbar } from './Navbar';

const fakeLogin = () => {
  console.log("login");
};
const fakeLogout = () => {
  console.log("logout");
};

test('Display Title in Navbar', () => {
  const navbar = shallow(<Navbar title="Test" isAuthenticated={false} logout={fakeLogout} />);

  expect(navbar.contains(<h1>Test</h1>)).toBe(true);

});
