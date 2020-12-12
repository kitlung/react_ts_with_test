import { TextField } from '@material-ui/core';
import { mount, shallow } from 'enzyme';
import React from 'react';
import Home from '../../Home';
import TodoInputField from '../index';

describe('rendering components', () => {
  it('render todoInputField without crashing', () => {
    const wrapper = mount(<Home />);
    const input = <TodoInputField />;
    expect(wrapper.contains(input)).toEqual(true);
  });
  it('render textField without crashing', () => {
    const wrapper = mount(<TodoInputField />);
    console.log('==== wrapper', wrapper);
  });
});
