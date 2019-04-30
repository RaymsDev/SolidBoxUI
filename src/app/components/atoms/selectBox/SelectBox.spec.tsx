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
    onChangeHandler: () => null,
  };
  const selectBox = shallow(<SelectBox {...props} />);

  expect(selectBox.exists('option')).toBe(false);
});

it('View Update', () => {
  const props: ISelectBoxProps = {
    isFetching: true,
    label: 'test',
    list: [],
    name: 'test',
    onChangeHandler: () => null,
  };
  const selectBox = shallow(<SelectBox {...props} />);

  expect(selectBox.exists('option')).toBe(false);

  const updatedProps: ISelectBoxProps = {
    ...props,
    isFetching: false,
    list: [
      {
        key: 1,
        text: 'fake item',
        value: 1,
      },
    ],
  };
  selectBox.setProps(updatedProps);
});

it('Fire event on change after fetch', () => {
  const props: ISelectBoxProps = {
    isFetching: true,
    label: 'test',
    list: [],
    name: 'test',
    onChangeHandler: jest.fn(),
  };
  const selectBox = shallow(<SelectBox {...props} />);

  const updatedProps: ISelectBoxProps = {
    ...props,
    isFetching: false,
    list: [
      {
        key: 1,
        text: 'fake item',
        value: 1,
      },
    ],
  };
  selectBox.setProps(updatedProps);

  expect(props.onChangeHandler).toBeCalled();
  const selected = selectBox.state('selected');
  expect(selected).toEqual(1);
});

it('Fire event at mount if not fetching', () => {
  const props: ISelectBoxProps = {
    isFetching: false,
    label: 'test',
    list: [
      {
        key: 1,
        value: {
          name: 'fake item',
        },
        text: 'test',
      },
    ],
    name: 'test',
    onChangeHandler: jest.fn(),
  };
  const selectBox = shallow(<SelectBox {...props} />);

  expect(props.onChangeHandler).toBeCalled();
});
