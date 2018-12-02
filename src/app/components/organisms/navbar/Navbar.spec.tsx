import { shallow } from 'enzyme';
import * as React from 'react';
import { Navbar } from './Navbar';

test('Display Title in Navbar', () => {
  const navbar = shallow(<Navbar title="Test" />);

  expect(navbar.contains(<h1>Test</h1>)).toBe(true);

});
