import { mount, shallow } from 'enzyme';
import React from 'react';
import App from '../../../App';
import Home from '../index';

describe('rendering components', () => {
  it('render home page without crashing', () => {
    const wrapper = shallow(<App />);
    const homePage = <Home />;
    expect(wrapper.contains(homePage)).toEqual(true);
  });
  it('render home page title', () => {
    const homePage = mount(<Home />);
    const title = homePage.find('Title').text();
    expect(title).toEqual('Todo List');
  });
});
