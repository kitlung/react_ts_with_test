import { mount, shallow } from 'enzyme';
import React from 'react';
import App from './App';
import Home from './container/Home';

describe('rendering components', () => {
  it('render App component without crashing', () => {
    shallow(<App />);
  });
});
