import { shallow } from 'enzyme';
import * as React from 'react';
import { ProjectPage } from './ProjectPage';
test('Display project page text', () => {
  const div = shallow(<ProjectPage>ProjectPage</ProjectPage>);

  // Interaction demo
  const textValue = div.text();
  expect(textValue).toBe('ProjectPage');

});
