import React from 'react';
import ReactDOM from 'react-dom';
import ButtonToooBox from './ButtonToolBox'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonToooBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});