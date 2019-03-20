import { shallow } from 'enzyme';
import * as React from 'react';
import { ISelectBoxProps } from './ISelectBoxProps';
import { SelectBox } from './SelectBox';

it('Empty select box', () => {
  const props: ISelectBoxProps = {
    isFetching: false,
    label: 'test',
    list: [],
    name: 'test',
    onChangeHandler: () => null
  };
  const selectBox = shallow(<SelectBox {...props} />);

  expect(selectBox.exists("option")).toBe(false);

});

it('View Update', () => {
  const props: ISelectBoxProps = {
    isFetching: true,
    label: 'test',
    list: [],
    name: 'test',
    onChangeHandler: () => null
  };
  const selectBox = shallow(<SelectBox {...props} />);

  expect(selectBox.exists("option")).toBe(false);

  selectBox.setProps({
    isFetching: false,
    list: [{
      id: 1,
      object: {},
      value: "test"
    }]
  });

  expect(selectBox.exists("option")).toBe(true);

});

it('Fire event on change after fetch', () => {
  const props: ISelectBoxProps = {
    isFetching: true,
    label: 'test',
    list: [],
    name: 'test',
    onChangeHandler: jest.fn()
  };
  const selectBox = shallow(<SelectBox {...props} />);
  expect(selectBox.exists("option")).toBe(false);

  selectBox.setProps({
    isFetching: false,
    list: [{
      id: 1,
      object: {
        name: "fake item"
      },
      value: "test"
    }]
  });

  expect(props.onChangeHandler).toBeCalled();
  expect(selectBox.exists("option")).toBe(true);
});

it('Fire event at mount if not fetching', () => {
  const props: ISelectBoxProps = {
    isFetching: false,
    label: 'test',
    list: [{
      id: 1,
      object: {
        name: "fake item"
      },
      value: "test"
    }],
    name: 'test',
    onChangeHandler: jest.fn()
  };
  const selectBox = shallow(<SelectBox {...props} />);

  expect(props.onChangeHandler).toBeCalled();
  expect(selectBox.exists("option")).toBe(true);
});
