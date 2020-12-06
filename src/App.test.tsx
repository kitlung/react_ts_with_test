import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
import Home from './container/Home';

describe('rendering components', () => {
  it('render App component without crashing', () => {
    shallow(<App />);
  });
  it('render home page without crashing', () => {
    const wrapper = shallow(<App />);
    const homePage = <Home />;
    expect(wrapper.contains(homePage)).toEqual(true);
  });
});
