import React from 'react';
import ReactDOM from 'react-dom';
import Fabrica from './Fabrica'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Fabrica />, div);
  ReactDOM.unmountComponentAtNode(div);
});